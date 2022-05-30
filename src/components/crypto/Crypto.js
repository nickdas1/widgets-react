import "./styles.css";
import React, { useState, useEffect } from "react";

const CURRENCY_NAMES = {
  "BTCUSDT": "Bitcoin",
  "ETHUSDT": "Ethereum",
  "ADAUSDT": "Cardano",
  "SOLUSDT": "Solana",
  "DOGEUSDT": "Dogecoin",
};

const SYMBOLS = Object.keys(CURRENCY_NAMES);

export default function Crypto() {
  const [currencies, setCurrencies] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonDisabled(true);
    fetch("https://api2.binance.com/api/v3/ticker/24hr")
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(
          data.filter((currency) => SYMBOLS.includes(currency.symbol))
        );
        setRefreshData(false);
        setButtonDisabled(false);
      });
  }, [refreshData]);

  return (
    <div className="App">
      <nav>
        <img
          alt="logo"
          src="https://assets.codepen.io/6060109/crypto-logo-secondary.png"
        />
      </nav>
      <div className="main-content">
        <h2>Today's cryptocurrency prices</h2>
        <button disabled={isButtonDisabled} className="refreshButton" onClick={() => setRefreshData(true)}>Refresh Data</button>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency, index) => (
              <tr key={currency.symbol}>
                <td>{index + 1}</td>
                <td>{CURRENCY_NAMES[currency.symbol]}</td>
                <td>${Number(currency.bidPrice).toLocaleString()}</td>
                <td
                  style={
                    Number(currency.priceChangePercent) >= 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {Number(currency.priceChangePercent) < 0 ? '▼' : '▲'}
                  {Number(currency.priceChangePercent).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bottom-logo-ctr">
          <img
            className="bottom-logo"
            alt="logo"
            src="https://assets.codepen.io/6060109/crypto-logo-primary.png"
          />
        </div>
      </div>
    </div>
  );
}
