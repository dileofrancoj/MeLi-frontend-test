import React from "react";
import { shallow } from "enzyme";
import ProductsView from "./../../Views/Products";
import { BrowserRouter as Router } from "react-router-dom";
const initialState = {
  id: 1,
  title: "test",
  price: {
    currency: "ARS",
    amount: 2000,
    decimals: 2,
  },
  picture: "test.jpg",
  condition: "usado",
  free_shipping: true,
  address: "capital",
};

describe("<ProductsView /> test", () => {
  const wrapper = shallow(
    <Router>
      <ProductsView {...initialState} />
    </Router>
  );
  test("Should render a ProductsView", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
