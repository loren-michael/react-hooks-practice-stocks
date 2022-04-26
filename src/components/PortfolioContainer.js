import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onAddPortfolio }) {

  return (
    <div id="portfolio" >
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => {
        return <Stock key={stock.id} stock={stock} onStockClick={onAddPortfolio} />
      })}
    </div>
  );
}

export default PortfolioContainer;
