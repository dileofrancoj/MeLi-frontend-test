import React from "react";
import { shallow } from "enzyme";

import Head from "./../Components/Head";

describe("Header", () => {
  test("should render Head component with props ", () => {
    const component = shallow(
      <Head title="Title de prueba" description="Descripcion de prueba" />
    );
    expect(component).toMatchSnapshot();
  });
});
