import React from "react";
import { shallow } from "enzyme";
import ProductsView from "./../../Views/Products";
import { BrowserRouter as Router } from "react-router-dom";
const product = {
  id: 1,
  title: "titulo",
  price: {
    currency: "ARS",
    amount: 2000,
    decimals: 2,
  },
  picture: "picture.png",
  condition: "new",
  free_shipping: true,
  sold_quantity: 300,
  description: "descripcion de prueba",
  categories: ["producto", "prueba"],
};

describe("<ProductView /> test", () => {
  const wrapper = shallow(
    <Router>
      <ProductsView product={product} />
    </Router>
  );
  test("Should render a ProductView", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
