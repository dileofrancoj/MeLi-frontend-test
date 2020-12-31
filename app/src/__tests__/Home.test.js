import React from "react";
import { shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";
import Home from "../Pages/Home";

describe("Home", () => {
  test("should render Home component ", () => {
    const component = shallow(
      <StaticRouter>
        <Home />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
