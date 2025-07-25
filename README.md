# AlphaVaultFX Trading Journal

A personal trading journal for CSV exports from TradeLocker/KOT4X.  
Built with Node.js/Express (backend) and React (frontend).  
CSV import parses only actual trades (ignores commissions, deposits, etc).

## Quick Start

1. `cd backend && npm install`
2. Set up your MongoDB string in `backend/.env`
3. `node server.js` (or `npm run dev` for nodemon)
4. `cd ../frontend && npm install`
5. `npm start`
6. Go to [http://localhost:3000](http://localhost:3000)

## Features

- Upload TradeLocker CSVs
- Auto-import only real trades (BUY/SELL)
- View trades in a table
- Extend with analytics as you like!

---
