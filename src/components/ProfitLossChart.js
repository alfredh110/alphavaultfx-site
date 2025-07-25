import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Typography, Box } from "@mui/material";

function prepareChartData(trades) {
  let runningTotal = 0;
  return trades.map((trade, idx) => {
    runningTotal += trade.profit || 0;
    return {
      name: trade.symbol + " " + (idx + 1),
      ProfitLoss: trade.profit,
      Total: runningTotal,
    };
  });
}

export function ProfitLossChart({ trades }) {
  if (!trades || trades.length === 0) {
    return (
      <Typography variant="body1" align="center" sx={{ color: "secondary.main" }}>
        No trades to chart.
      </Typography>
    );
  }
  const data = prepareChartData(trades);

  return (
    <Box sx={{
      width: "100%",
      height: 330,
      background: "rgba(23,26,33,0.97)",
      borderRadius: 3,
      boxShadow: "0 0 24px #03dac655",
      p: 2,
      mb: 2
    }}>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{
          color: "primary.main",
          fontFamily: "IBM Plex Mono, monospace"
        }}
      >
        Profit / Loss per Trade
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#263043" strokeDasharray="4" />
          <XAxis dataKey="name" hide />
          <YAxis />
          <Tooltip
            contentStyle={{ background: "#222f3e", border: "1px solid #03dac6", color: "#fff" }}
            labelStyle={{ color: "#ffd700" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="ProfitLoss"
            stroke="#03dac6"
            strokeWidth={3}
            dot={{ r: 5, fill: "#ffd700", stroke: "#03dac6", strokeWidth: 2, filter: "drop-shadow(0 0 8px #03dac6)" }}
            name="P/L"
          />
          <Line
            type="monotone"
            dataKey="Total"
            stroke="#ffd700"
            strokeWidth={3}
            dot={false}
            name="Cumulative"
            style={{ filter: "drop-shadow(0 0 10px #ffd70088)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
