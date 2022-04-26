import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("Alphabetically");

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
    .then(r => r.json())
    .then(stocks => setStocks(stocks))
  }, [])

  function handleAddPortfolio(newStock) {
    if (portfolio.includes(newStock)) {
      const newPortfolio = portfolio.filter((stock) => stock.id !== newStock.id);
      setPortfolio(newPortfolio)
    } else {
      setPortfolio([...portfolio, newStock])
    }
  }
  
  function onFilterChange(filter) {
    setFilter(filter)
  }

  function onSortChange(sort) {
    setSort(sort);
  }

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sort === "Alphabetically") {
      return a.name - b.name
    } else if (sort === "Price") {
      return a.price - b.price
    }
  })
  
  const filteredStocks = sortedStocks.filter((stock) => {
    if (stock.type === filter) {
      return stock
    } else if (filter === "All") {
      return stock
    }
  })

  return (
    <div>
      <SearchBar 
        onFilterChange={onFilterChange}
        onSortChange={onSortChange}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={filteredStocks} 
            onAddPortfolio={handleAddPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio} 
            onAddPortfolio={handleAddPortfolio} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
