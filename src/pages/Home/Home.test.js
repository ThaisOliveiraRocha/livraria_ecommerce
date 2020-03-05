import React from "react";
import { shallow } from "enzyme";
import Home from ".";

describe("<Home />", () => {
  it("should render without crashing", () => {
    shallow(<Home />);
  });
  it("should render basic footer infos", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
