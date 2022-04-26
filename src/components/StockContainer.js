import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddPortfolio }) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return <Stock key={stock.id} stock={stock} onStockClick={onAddPortfolio} />
      })}
    </div>
  );
}

export default StockContainer;
