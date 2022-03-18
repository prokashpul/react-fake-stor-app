import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Productdetails.css";
import Modal from "react-bootstrap/Modal";
const Productdetails = ({ product }) => {
  const { title, category, description, image, price } = product || {};
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow} size="sm">
        Details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-md-5">
              <img src={image} alt="" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <h2>{title}</h2>
              <h4>
                Category:<span className="text-warning">{category}</span>
              </h4>
              <p>{description}</p>
              <h4>
                Price: <span className="text-warning">${price}</span>
              </h4>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Productdetails;
