import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Typography, Box } from "@mui/material";

function prepareChartData(trades, capitalEvents) {
  // Ensure capitalEvents is sorted by atIndex
  const sortedCapitals = [...(capitalEvents || [])].sort((a, b) => a.atIndex - b.atIndex);
  let runningTotal = 0;
  let capIdx = 0;
  const data = [];

  for (let i = 0; i <= trades.length; i++) {
    // Add all capital events at this point
    while (capIdx < sortedCapitals.length && sortedCapitals[capIdx].atIndex === i) {
      runningTotal += sortedCapitals[capIdx].amount;
      capIdx++;
    }
    if (i < trades.length) {
      runningTotal += trades[i].profit || 0;
      data.push({
        name: trades[i].symbol + " " + (i + 1),
        Cumulative: runningTotal,
        TradePL: trades[i].profit,
        CapitalEvent: sortedCapitals.some(c => c.atIndex === i + 1) ? "Deposit" : ""
      });
    }
  }
  return data;
}

export function ProfitLossChart({ trades, capitalEvents }) {
  if (!trades || trades.length === 0) {
    return (
      <Typography variant="body1" align="center" sx={{ color: "secondary.main" }}>
        No trades to chart.
      </Typography>
    );
  }
  const data = prepareChartData(trades, capitalEvents);

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
        Cumulative Balance (with Capital Additions)
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#263043" strokeDasharray="4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ background: "#222f3e", border: "1px solid #03dac6", color: "#fff" }}
            labelStyle={{ color: "#ffd700" }}
            formatter={(value, name) =>
              name === "Cumulative" ? [`$${value.toLocaleString()}`, "Balance"] : [value, name]
            }
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="Cumulative"
            stroke="#ffd700"
            strokeWidth={3}
            dot={{ r: 5, fill: "#03dac6", stroke: "#ffd700", strokeWidth: 2, filter: "drop-shadow(0 0 8px #ffd700)" }}
            name="Cumulative Balance"
            style={{ filter: "drop-shadow(0 0 10px #ffd70088)" }}
          />
          <Line
            type="monotone"
            dataKey="TradePL"
            stroke="#03dac6"
            strokeWidth={2}
            dot={false}
            name="Trade P/L"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
