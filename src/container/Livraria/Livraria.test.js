import React from "react";
import { shallow } from "enzyme";
import Livraria from "./Livraria";

describe("<Livraria />", () => {
  it("should render without crashing", () => {
    shallow(<Livraria />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Livraria />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
