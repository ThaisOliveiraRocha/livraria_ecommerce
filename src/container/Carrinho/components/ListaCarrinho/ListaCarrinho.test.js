import React from "react";
import { shallow } from "enzyme";
import ListaCarrinho from "./ListaCarrinho";

describe("<ListaCarrinho />", () => {
  it("should render without crashing", () => {
    shallow(<ListaCarrinho />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<ListaCarrinho />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
