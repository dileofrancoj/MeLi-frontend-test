import React from "react";
import { shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";
import { Search } from "../../server/controllers/products";

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
    const search = new Search();
    const data = await search.product(productId);
    expect(typeof data).toBe("object");
  });
});
