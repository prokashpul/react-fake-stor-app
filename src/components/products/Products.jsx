import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ cartCount }) => {
  const [products, setState] = useState([]);
  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);
  return (
    <div className="container my-5">
      <Row xs={1} md={3} className="g-4">
        {products?.map((product) => (
          <Product
            product={product}
            key={product?.id}
            cartCount={cartCount}
          ></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;
