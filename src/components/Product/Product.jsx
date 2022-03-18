import React from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import { Button, Col } from "react-bootstrap";
import Productdetails from "../Productdetails/Productdetails";

const Product = ({ product, cartCount }) => {
  const { title, category, description, image, price } = product || {};
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0, 40) + " ..."}</Card.Text>
          <h5>
            Category: <span className="text-warning">{category}</span>{" "}
          </h5>
          <h5>
            Price: <span className="text-warning">${price}</span>{" "}
          </h5>
        </Card.Body>
        <div className="ms-3 mb-3">
          <Button variant="primary" size="sm" onClick={cartCount}>
            Add to Cart
          </Button>{" "}
          <Button variant="danger" size="sm">
            Delete
          </Button>{" "}
          <Productdetails product={product}></Productdetails>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
