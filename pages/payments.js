import React, { useState } from "react";

// Helper to get coordinates for a city using Open-Meteo's geocoding API
async function fetchCoordinates(city) {
  const resp = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
  const data = await resp.json();
  if (data.results && data.results.length > 0) {
    return {
      lat: data.results[0].latitude,
      lon: data.results[0].longitude,
      name: data.results[0].name,
      country: data.results[0].country
    };
  }
  throw new Error("City not found");
}

export default function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    setWeather(null);
    setErr("");
    setLoading(true);

    try {
      const coords = await fetchCoordinates(city);
      // Fetch current weather
      const weatherResp = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`
      );
      const weatherData = await weatherResp.json();
      setWeather({
        ...coords,
        ...weatherData.current_weather
      });
    } catch (error) {
      setErr(error.message);
    }
    setLoading(false);
  }

  return (
    <div style={{
      maxWidth: 400,
      margin: "40px auto",
      padding: 24,
      borderRadius: 16,
      background: "#222e3a",
      color: "#fff",
      boxShadow: "0 4px 24px #0003"
    }}>
      <h2 style={{ textAlign: "center" }}>Weather Dashboard</h2>
      <form onSubmit={handleSearch} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Enter city (e.g. London)"
          value={city}
          onChange={e => setCity(e.target.value)}
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 8,
            border: "1px solid #445"
          }}
          required
        />
        <button type="submit" style={{
          padding: "10px 18px",
          borderRadius: 8,
          border: "none",
          background: "#3c9cff",
          color: "#fff",
          fontWeight: 700,
          cursor: "pointer"
        }}>
          {loading ? "..." : "Search"}
        </button>
      </form>
      {err && <div style={{ color: "#f66", marginBottom: 12 }}>{err}</div>}
      {weather && (
        <div style={{
          background: "#263446",
          borderRadius: 12,
          padding: 16,
          textAlign: "center"
        }}>
          <h3>{weather.name}, {weather.country}</h3>
          <div style={{ fontSize: 36, fontWeight: 700 }}>{weather.temperature}°C</div>
          <div style={{ fontSize: 18, color: "#aaf", marginBottom: 8 }}>
            {weather.weathercode === 0 ? "Clear" : "See docs for code"}
          </div>
          <div>Wind: {weather.windspeed} km/h</div>
        </div>
      )}
    </div>
  );
}
