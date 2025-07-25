import React from 'react';

export default function TradeTable({ trades }) {
  if (!trades.length) return <p>No trades found.</p>;

  return (
    <table border="1" cellPadding="5" cellSpacing="0" style={{ width: '100%', fontSize: 14 }}>
      <thead>
        <tr>
          <th>Ticket</th>
          <th>Type</th>
          <th>Symbol</th>
          <th>Volume</th>
          <th>Open Time</th>
          <th>Open Price</th>
          <th>Close Time</th>
          <th>Close Price</th>
          <th>Profit</th>
        </tr>
      </thead>
      <tbody>
        {trades.map(trade => (
          <tr key={trade._id}>
            <td>{trade.ticket}</td>
            <td>{trade.type}</td>
            <td>{trade.symbol}</td>
            <td>{trade.volume}</td>
            <td>{trade.openedAt ? new Date(trade.openedAt).toLocaleString() : ''}</td>
            <td>{trade.openPrice}</td>
            <td>{trade.closedAt ? new Date(trade.closedAt).toLocaleString() : ''}</td>
            <td>{trade.closePrice}</td>
            <td style={{ color: trade.profit >= 0 ? 'green' : 'red' }}>{trade.profit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
