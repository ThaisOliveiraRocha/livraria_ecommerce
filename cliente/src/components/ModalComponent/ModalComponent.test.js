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
  it("clicou no botão >Confirma< e chamou a função", () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <ModalComponent tema={tema} mensagem={mensagem} funcaoConfirma={mock} />
    );

    wrapper.find(".btnConfirmar").simulate("click");

    expect(mock).toHaveBeenCalled();
  });
  it("clicou no botão >Cancel< e chamou a função", () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <ModalComponent tema={tema} mensagem={mensagem} cancel={mock} />
    );

    wrapper.find(".btnCancelar").simulate("click");

    expect(mock).toHaveBeenCalled();
  });
  it("clicou no botão >Close< e chamou a função", () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <ModalComponent tema={tema} mensagem={mensagem} cancel={mock} />
    );

    wrapper.find(".close").simulate("click");

    expect(mock).toHaveBeenCalled();
  });
});
