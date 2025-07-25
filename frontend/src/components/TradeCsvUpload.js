import React, { useState } from 'react';
import axios from 'axios';

export default function TradeCsvUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = e => setFile(e.target.files[0]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!file) return setMessage('No file selected!');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/trades/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage(`Imported ${res.data.imported} trades!`);
      setFile(null);
      if (onUpload) onUpload();
    } catch (error) {
      setMessage('Import failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button type="submit" style={{ marginLeft: 8 }}>Upload CSV</button>
      {message && <div style={{ marginTop: 8 }}>{message}</div>}
    </form>
  );
}
