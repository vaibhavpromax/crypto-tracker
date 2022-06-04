import React from "react";
import "./CoinApp.css";
const Coin = ({
  name,
  image,
  symbol,
  volume,
  price,
  marketCap,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <div className="coin-symbol">{symbol}</div>
        </div>

        <div className="coin-data">
          <p className="coin-price">₹{price}</p>
          <div className="coin-volume">₹{volume.toLocaleString()}</div>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: ₹{marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
