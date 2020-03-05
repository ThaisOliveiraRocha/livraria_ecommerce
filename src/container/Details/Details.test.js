import React from "react";
import { shallow } from "enzyme";
import Details from "./Details";

describe("<Details />", () => {
  it("should render without crashing", () => {
    shallow(<Details />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Details />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
