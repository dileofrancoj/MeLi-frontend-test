import React from "react";
import { shallow, mount } from "enzyme";
import { StaticRouter } from "react-router-dom";

import Product from "./../Pages/Product";

describe("Product", () => {
  test("should render basic Product component ", () => {
    const component = shallow(
      <StaticRouter>
        <Product />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
