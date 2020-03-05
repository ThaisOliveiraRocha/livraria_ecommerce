import React from "react";
import { shallow } from "enzyme";
import Text from "./Text";

describe("<Text />", () => {
  it("should render without crashing", () => {
    shallow(<Text />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Text />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
