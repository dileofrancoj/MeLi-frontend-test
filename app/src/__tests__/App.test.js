import React from "react";
import { shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  test("should render App component for route /products", () => {
    const component = shallow(
      <StaticRouter location={"/products"}>
        <App />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
