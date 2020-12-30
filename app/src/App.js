import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Products from "./Pages/Products";
import Product from "./Pages/Product";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";

export default function App() {
  const [searchItem, setSearchItem] = useState("");
  const handleSearch = (product) => {
    setSearchItem(product.toLowerCase());
  };
  return (
    <React.Fragment>
      <Header handleSearch={handleSearch} />
      <Container>
        <Switch>
          <Route path="/products" exact>
            <Products searchItem={searchItem} />
          </Route>
          <Route path="/product/:id" exact component={Product} />
          <Redirect to="/products" />
        </Switch>
      </Container>
    </React.Fragment>
  );
}
