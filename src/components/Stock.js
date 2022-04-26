import React from "react";
// import PortfolioContainer from "./PortfolioContainer";

function Stock({ stock, onStockClick }) {

  function handleStockClick() {
    // console.log(event.target.parentNode.id);
    onStockClick(stock)
  }

  return (
    <div>
      <div className="card" onClick={handleStockClick} >
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
