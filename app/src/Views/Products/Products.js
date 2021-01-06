import React from "react";
/* Bootstrap */
import { Row, Col } from "react-bootstrap";

/* Currency Helper */
import { formatAsCurrency } from "../../../server/utils/helpers";

/* Routing */
import { Link } from "react-router-dom";

const ProductsView = ({
  id,
  title,
  price,
  free_shipping,
  address,
  picture,
}) => {
  return (
    <Row className="justify-content-center bg-white pb-16 pt-16 pl-32 first-row">
      <Col md={9}>
        <Row>
          <Col md={3} className="thumbnail">
            <Link to={`/items/${id}`}>
              <picture>
                <img
                  className="pointer rounded thumbnail"
                  src={picture}
                  alt={title}
                />
              </picture>
            </Link>
          </Col>
          <Col md={9}>
            <h4 className="f-24">
              $ {formatAsCurrency(price.amount)}{" "}
              {free_shipping ? (
                <img
                  src="https://images-prod-meli.s3-sa-east-1.amazonaws.com/ic_shipping.png"
                  alt="free shipping"
                />
              ) : null}
            </h4>

            <Link
              className="mt-32"
              to={`/items/${id}`}
              style={{
                color: "black",
                textDecoration: "inherit",
              }}
            >
              <p className="pointer f-18 ">{title}</p>
            </Link>
          </Col>
        </Row>
      </Col>
      <Col md={3} className="pt-16 pl-16">
        <p className="f-12"> {address}</p>
      </Col>
    </Row>
  );
};

export default ProductsView;
