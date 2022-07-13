import React from "react";
import "./Filter.css";
export const Filter = () => {
  return (
    <div className="filters-wrapper">
      <div className="filter-main">
        <div className="filter-heading">Filters</div>
        <div className="filter-clear">Clear Filter</div>
      </div>
      <div className="filters">
        <div className="filter-head">Categories</div>
        <div className="filter-option">
          <label>
            <input type="checkbox" /> HRX
          </label>
          <label>
            <input type="checkbox" /> Adidas
          </label>
          <label>
            <input type="checkbox" /> Monte Carlo
          </label>
          <label>
            <input type="checkbox" /> Montrez
          </label>
        </div>
        <div className="filter-head">Gender</div>
        <div className="filter-option">
          <label>
            <input type="checkbox" /> Male
          </label>
          <label>
            <input type="checkbox" /> Female
          </label>
        </div>
        <div className="filter-head">Discount</div>
        <div className="filter-option">
          <label>
            <input type="radio" /> 20%
          </label>
          <label>
            <input type="radio" /> 30%
          </label>
          <label>
            <input type="radio" /> 50%
          </label>
        </div>
      </div>
    </div>
  );
};
