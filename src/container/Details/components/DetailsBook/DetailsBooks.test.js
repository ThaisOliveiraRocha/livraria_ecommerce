import React from "react";
import { shallow } from "enzyme";
import DetailsBook from "./DetailsBook";

describe("<DetailsBook />", () => {
  it("should render without crashing", () => {
    shallow(<DetailsBook />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<DetailsBook />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
