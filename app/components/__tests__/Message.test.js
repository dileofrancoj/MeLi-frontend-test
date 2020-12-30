import React from "react";
import { shallow } from "enzyme";
import { StaticRouter } from "react-router-dom";

import Message from "./../Message";

describe("Message", () => {
  test("should render Message component ", () => {
    const component = shallow(
      <StaticRouter>
        <Message message="Test" />
      </StaticRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
