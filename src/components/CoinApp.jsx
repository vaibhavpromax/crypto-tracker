import axios from "axios";
import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import "./CoinApp.css";
export default function CoinApp() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=falsehttps://www.thunderclient.com/welcome"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(coins);
      })
      .catch((error) => alert("Ooops try later!!"));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const fileteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            onChange={handleChange}
            className="coin-input"
            type="text"
            placeholder="search"
          />
        </form>
      </div>
      {fileteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}
