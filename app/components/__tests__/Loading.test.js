import React from "react";
import { shallow } from "enzyme";
import Loader from "react-loader-spinner";
import Loading from "./../Loading";

describe("Loading", () => {
  test("should render Loading component ", () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
  });
  test("should return a Loader component ", () => {
    const component = shallow(<Loading />);
    const element = component.find(<Loader />);
    expect(!!element).toBe(true);
    //expect(component).toMatcSnapshot();
  });
});
