import React from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import { Button, Col } from "react-bootstrap";

const Product = (props) => {
  const { title, category, description, image, price } = props.product;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <div className="ms-3 mb-3">
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>{" "}
          <Button variant="danger" size="sm">
            Delete
          </Button>{" "}
          <Button variant="warning" size="sm">
            Details
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
