import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const iterateCategories = (categories) => {
  return categories.map((cat, i) => (
    <span key={i}>
      <React.Fragment>
        {cat} {i < categories.length - 1 ? " > " : ""}
      </React.Fragment>
    </span>
  ));
};

const Breadcrumb = ({ categories }) => {
  return (
    <Row className="mt-16 mb-16">
      <Col md={12}>
        {/* Se deja el Link por si se amplia a busqueda de categorias */}
        <span>{categories ? iterateCategories(categories) : null}</span>
      </Col>
    </Row>
  );
};

Breadcrumb.propTypes = {
  categories: PropTypes.array,
};

export default Breadcrumb;
