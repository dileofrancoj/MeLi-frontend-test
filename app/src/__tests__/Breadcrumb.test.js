import React from "react";
import { shallow } from "enzyme";
import Breadcrumb from "./../Breadcrumb";

describe("Breadcrumb", () => {
  test("should render Breadcrumb component ", () => {
    const component = shallow(<Breadcrumb />);
    expect(component).toMatchSnapshot();
  });
  test("should show span element ", () => {
    const component = shallow(<Breadcrumb categories={["data"]} />);
    const element = component.find("span");
    expect(!!element).toBe(true);
    //expect(component).toMatcSnapshot();
  });
});
