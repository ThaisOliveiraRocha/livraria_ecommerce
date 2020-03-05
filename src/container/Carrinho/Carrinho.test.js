import React from "react";
import { shallow } from "enzyme";
import Carrinho from "./Carrinho";

describe("<Carrinho />", () => {
  it("should render without crashing", () => {
    shallow(<Carrinho />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Carrinho />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
