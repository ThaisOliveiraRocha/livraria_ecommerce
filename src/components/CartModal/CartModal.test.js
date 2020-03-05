import React from "react";
import { shallow } from "enzyme";
import CartModal from "./CartModal";
import ItemCart from "./ItemCart";

describe("<CartModal />", () => {
  it("should render without crashing", () => {
    shallow(<CartModal />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<CartModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
