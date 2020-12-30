import React from "react";
import { shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";
import { searchById } from "../../server/controllers/products";

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
  test("should get an Object by Id", async () => {
    const productId = "MLA867086863";
    const data = await searchById(productId);
    expect(typeof data).toBe("object");
  });
});
