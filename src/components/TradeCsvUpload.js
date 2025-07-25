import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map(h => h.replace(/"/g, '').trim());

  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const row = [];
    let inQuotes = false, cell = "";
    for (const char of lines[i]) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        row.push(cell);
        cell = "";
      } else {
        cell += char;
      }
    }
    row.push(cell);

    const entry = {};
    headers.forEach((h, idx) => {
      entry[h] = row[idx]?.replace(/"/g, '').trim();
    });

    if (
      entry["Order Type"] &&
      ["buy", "sell"].includes(entry["Order Type"].toLowerCase()) &&
      entry["Symbol"] &&
      entry["Symbol"].toLowerCase() !== "no symbol"
    ) {
      results.push({
        ticket: entry["Ticket"],
        type: entry["Order Type"],
        symbol: entry["Symbol"],
        volume: parseFloat(entry["Volume"]) || 0,
        sl: entry["S/L"] ? parseFloat(entry["S/L"]) : null,
        tp: entry["T/P"] ? parseFloat(entry["T/P"]) : null,
        openedAt: entry["Opened At"] ? entry["Opened At"] : null,
        openPrice: entry["Open Price"] ? parseFloat(entry["Open Price"]) : null,
        closedAt: entry["Closed At"] ? entry["Closed At"] : null,
        closePrice: entry["Close Price"] ? parseFloat(entry["Close Price"]) : null,
        swaps: entry["Swaps"] ? parseFloat(entry["Swaps"]) : 0,
        commission: entry["Commission"] ? parseFloat(entry["Commission"]) : 0,
        profit: entry["Profit/Balance"]
          ? parseFloat(entry["Profit/Balance"].replace(/[^-\d.]/g, ""))
          : 0,
      });
    }
  }
  return results;
}

export default function TradeCsvUpload({ onTradesParsed, clearFile }) {
  const [message, setMessage] = useState("");
  const fileRef = useRef();

  useEffect(() => {
    if (clearFile && fileRef.current) {
      fileRef.current.value = "";
      setMessage("");
    }
  }, [clearFile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const trades = parseCSV(evt.target.result);
        if (trades.length === 0) {
          setMessage("No valid trades found in file.");
        } else {
          setMessage(`Imported ${trades.length} trades!`);
        }
        if (onTradesParsed) onTradesParsed(trades, file.name);
      } catch {
        setMessage("Import failed.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <form>
      <Button
        component="label"
        startIcon={<UploadFileIcon />}
        variant="contained"
        color="primary"
        sx={{
          textTransform: "none",
          boxShadow: "0 0 8px #03dac6aa",
          fontWeight: 600
        }}
      >
        Import CSV
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          hidden
          ref={fileRef}
        />
      </Button>
      {message && (
        <div style={{
          marginTop: 8,
          color: "#ffd700",
          fontFamily: "monospace",
          fontSize: "0.95rem"
        }}>{message}</div>
      )}
    </form>
  );
}
