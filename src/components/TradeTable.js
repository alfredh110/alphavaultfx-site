import React from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from "@mui/material";

export default function TradeTable({ trades }) {
  if (!trades || trades.length === 0) {
    return (
      <Typography variant="body1" align="center" sx={{ color: "secondary.main" }}>
        No trades to show.
      </Typography>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 2,
        background: "rgba(23,26,33,0.97)",
        boxShadow: "0 0 16px #222f3e99"
      }}
    >
      <Table size="small">
        <TableHead>
          <TableRow sx={{ background: "#1d2127" }}>
            <TableCell sx={{ color: "secondary.main", fontWeight: 700 }}>Ticket</TableCell>
            <TableCell sx={{ color: "secondary.main", fontWeight: 700 }}>Type</TableCell>
            <TableCell sx={{ color: "secondary.main", fontWeight: 700 }}>Symbol</TableCell>
            <TableCell sx={{ color: "secondary.main", fontWeight: 700 }}>Volume</TableCell>
            <TableCell sx={{ color: "secondary.main", fontWeight: 700 }}>Open Price</TableCell>
            <TableCell sx={{ color: "secondary.main", fontWeight: 700 }}>Close Price</TableCell>
            <TableCell sx={{ color: "secondary.main", fontWeight: 700 }}>Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade, idx) => (
            <TableRow key={idx}>
              <TableCell sx={{ color: "primary.main", fontFamily: "monospace" }}>{trade.ticket}</TableCell>
              <TableCell sx={{ color: trade.type.toLowerCase() === "buy" ? "success.main" : "error.main", fontWeight: 700 }}>
                {trade.type}
              </TableCell>
              <TableCell sx={{ fontFamily: "monospace" }}>{trade.symbol}</TableCell>
              <TableCell>{trade.volume}</TableCell>
              <TableCell>{trade.openPrice}</TableCell>
              <TableCell>{trade.closePrice}</TableCell>
              <TableCell
                sx={{
                  color: trade.profit > 0
                    ? "success.main"
                    : trade.profit < 0
                      ? "error.main"
                      : "text.primary",
                  fontWeight: 700,
                  fontFamily: "monospace"
                }}
              >
                {trade.profit}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
