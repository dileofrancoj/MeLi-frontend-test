import React from "react";
import { shallow } from "enzyme";

import Header from "../Components/Header";

describe("App", () => {
  test("should render Header component", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
  test("should simulate search without hooks", () => {
    const component = shallow(<Header />);
    const searchBox = component.find("#seach");
    searchBox.value = "macbook";
    component.find("button").at(0).simulate("click");
    expect(searchBox.value).toBe("macbook");
  });
});
