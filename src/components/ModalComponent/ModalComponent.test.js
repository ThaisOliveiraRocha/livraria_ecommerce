import React from "react";
import { shallow } from "enzyme";
import { ModalComponent } from "./ModalComponent";

const tema = "tema";
const mensagem = "mensagem";

describe("<ModalComponent />", () => {
  it("should render without crashing", () => {
    shallow(<ModalComponent tema={tema} mensagem={mensagem}/>);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<ModalComponent tema={tema} mensagem={mensagem}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it("clicou no botão e chamou a função", () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <ModalComponent tema={tema} mensagem={mensagem} funcaoConfirma={mock} />
    );

    wrapper.find(".btnConfirmar").simulate("click");

    expect(mock).toHaveBeenCalled();
  });
});
