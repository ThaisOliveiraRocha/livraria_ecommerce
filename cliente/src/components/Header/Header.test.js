import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header />", () => {
  it("should render without crashing", () => {
    shallow(<Header />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
