import React from "react";
import { Row, Col } from "react-bootstrap";

import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Row className="justify-content-center">
      <Col className="text-center">
        <Loader
          type="ThreeDots"
          color="black"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      </Col>
    </Row>
  );
};

export default Loading;
