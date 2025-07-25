# AlphaVaultFX Trading Journal

A professional, public trading journal web app for logging, importing, and reviewing your trades from TradeLocker/KOT4X.

## Features

- Upload TradeLocker CSV exports
- Automatically imports only real trades (BUY/SELL)
- View trades in a sortable table
- Ready to extend with analytics and stats

## Stack

- **Frontend:** React (create-react-app)
- **Backend:** Node.js/Express, MongoDB (Mongoose)
- **Deploy:** Frontend can be deployed on Vercel, Netlify, or GitHub Pages. Backend can be hosted on Render, Railway, etc.

---

## Quick Start

### 1. Backend

```bash
cd backend
npm install
# Edit .env for your MongoDB connection
npm run dev
```

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

---

- Visit [http://localhost:3000](http://localhost:3000) to use your journal.
- Deploy the frontend publicly for a professional look!
