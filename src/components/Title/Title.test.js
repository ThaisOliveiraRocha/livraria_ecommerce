import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

describe("<Title />", () => {
  it("should render without crashing", () => {
    shallow(<Title />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
