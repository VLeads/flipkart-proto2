import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import allProducts from "productsdata.json";
import { Filter, ProductCard } from "components";

export const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(allProducts));
    setProducts(data);
  }, []);

  return (
    <div className="productpage-container">
      <Filter />
      <div className="products-wrapper">
        <ul>
          {products.map((item) => (
            <li key={item._id}>
              <ProductCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
