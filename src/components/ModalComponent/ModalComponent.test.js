import React from "react";
import { shallow } from "enzyme";
import ModalComponent from "./ModalComponent";

describe("<ModalComponent />", () => {
  it("should render without crashing", () => {
    shallow(<ModalComponent />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<ModalComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
