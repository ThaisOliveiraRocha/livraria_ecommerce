import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";

describe("<Layout />", () => {
  it("should render without crashing", () => {
    shallow(<Layout />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
