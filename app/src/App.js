import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
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
          <Route path="/" exact component={Home} />
          <Route path="/items" exact>
            <Products searchItem={searchItem} />
          </Route>
          <Route path="/items/:id" exact component={Product} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </React.Fragment>
  );
}
