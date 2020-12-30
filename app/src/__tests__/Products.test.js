import React from "react";
import { shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";
import { search } from "../../server/controllers/products";
import Products from "./../Pages/Products";

describe("Products", () => {
  test("should render basic Products component ", () => {
    const component = shallow(
      <StaticRouter>
        <Products />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });

  test("should render Products with a prop ", () => {
    const component = shallow(
      <StaticRouter>
        <Products searchItem="Macbook" />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });

  test("should get an Object", async () => {
    const component = shallow(
      <StaticRouter>
        <Products searchItem="Macbook" />
      </StaticRouter>
    );
    const product = "macbook";
    const data = await search(product);
    expect(typeof data).toBe("object");
  });
});
