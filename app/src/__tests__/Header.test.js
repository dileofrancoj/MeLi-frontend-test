import React from "react";
import { shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";

import Header from "./../Components/Header";

describe("Header", () => {
  test("should render Header component ", () => {
    const component = shallow(
      <StaticRouter>
        <Header />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
