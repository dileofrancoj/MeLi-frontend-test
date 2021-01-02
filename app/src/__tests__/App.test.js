import React from "react";
import { shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";
import App from "../App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  test("should render App component for route /", () => {
    const component = shallow(
      <StaticRouter location={"/"}>
        <App />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });
  test("should render App component for route /items", () => {
    const component = shallow(
      <StaticRouter location={"/items"}>
        <App />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });
  test("should render App component for route /items/MLA867086863", () => {
    const productId = "MLA867086863";
    const component = shallow(
      <StaticRouter location={`/items/${productId}`}>
        <App />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
