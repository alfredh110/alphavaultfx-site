import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Typography } from "@mui/material";

// Prepare data for the chart
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
      <Typography variant="body1" align="center">
        No trades to chart.
      </Typography>
    );
  }
  const data = prepareChartData(trades);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Profit / Loss per Trade
      </Typography>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ProfitLoss" stroke="#8884d8" name="P/L" dot />
          <Line type="monotone" dataKey="Total" stroke="#82ca9d" name="Cumulative" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
