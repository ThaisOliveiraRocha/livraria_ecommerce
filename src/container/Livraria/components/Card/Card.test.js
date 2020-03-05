import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("<Card />", () => {
  it("should render without crashing", () => {
    shallow(<Card />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
