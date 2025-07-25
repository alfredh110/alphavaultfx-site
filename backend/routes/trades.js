const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const Trade = require('../models/Trade');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Upload and parse CSV
router.post('/upload', upload.single('file'), (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (row) => {
      // Only keep BUY and SELL with valid symbols
      if ((row['Order Type'] === 'BUY' || row['Order Type'] === 'SELL') && row['Symbol'] !== 'No Symbol') {
        results.push({
          ticket: row['Ticket'],
          type: row['Order Type'],
          symbol: row['Symbol'],
          volume: parseFloat(row['Volume']),
          sl: row['S/L'] ? parseFloat(row['S/L']) : null,
          tp: row['T/P'] ? parseFloat(row['T/P']) : null,
          openedAt: row['Opened At'] ? new Date(row['Opened At']) : null,
          openPrice: row['Open Price'] ? parseFloat(row['Open Price']) : null,
          closedAt: row['Closed At'] ? new Date(row['Closed At']) : null,
          closePrice: row['Close Price'] ? parseFloat(row['Close Price']) : null,
          swaps: row['Swaps'] ? parseFloat(row['Swaps']) : 0,
          commission: row['Commission'] ? parseFloat(row['Commission']) : 0,
          profit: row['Profit/Balance'] ? parseFloat(row['Profit/Balance'].replace(/[^-\d.]/g, '')) : 0,
        });
      }
    })
    .on('end', async () => {
      try {
        await Trade.insertMany(results);
        fs.unlinkSync(req.file.path);
        res.json({ success: true, imported: results.length });
      } catch (e) {
        res.status(500).json({ success: false, error: e.message });
      }
    });
});

// Get all trades
router.get('/', async (req, res) => {
  try {
    const trades = await Trade.find().sort({ openedAt: -1 }).limit(1000);
    res.json(trades);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
