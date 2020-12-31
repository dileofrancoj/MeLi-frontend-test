import React from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const heightCol = {
  height: "40px",
};

/* Search function */
const Header = ({ handleSearch }) => {
  const history = useHistory();
  console.log(history);
  const search = (e) => {
    const [{ value }] = e.target;
    e.preventDefault();
    // prevenir busqueda vacíos
    if (value.trim() !== "") {
      handleSearch(value);
      history.push(`/items?search=${value}`);
    }
  };

  return (
    <header className="app-header">
      <Row
        className="align-items-center searchBox m-0"
        style={{ textAlign: "right" }}
      >
        <Col md={4} style={heightCol}>
          <img
            alt="logo"
            src="https://images-prod-meli.s3-sa-east-1.amazonaws.com/Logo_ML.png"
            onClick={() => history.goBack()}
          />
        </Col>
        <Col md={4} style={heightCol}>
          <Form onSubmit={search}>
            <Form.Group controlId="formBasicEmail">
              <InputGroup>
                <input
                  name="search"
                  className="input-search form-control"
                  placeholder="Nunca dejes de buscar"
                  id="search"
                />

                <Button type="submit" className="btn-search">
                  <img
                    src="https://images-prod-meli.s3-sa-east-1.amazonaws.com/ic_Search.png"
                    alt="search icon"
                  />
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
