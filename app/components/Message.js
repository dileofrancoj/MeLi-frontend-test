import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
const Message = ({ message }) => {
  return (
    <Row>
      <Col>
        <h4 className="text-center mt-5">{message}</h4>
      </Col>
    </Row>
  );
};

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
