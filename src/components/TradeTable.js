import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

function TradeTable({ trades }) {
  if (!trades || trades.length === 0) return null;

  const columns = Object.keys(trades[0]);

  return (
    <Paper sx={{ overflowX: "auto" }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((row, i) => (
            <TableRow key={i}>
              {columns.map(col => (
                <TableCell key={col}>{row[col]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TradeTable;
