import React from "react";
import { shallow } from "enzyme";
import { ItemCart } from "./ItemCart";

const item = {
  imagem: "book1.png",
  titulo: "É Assim Que Acaba",
  genero: "romance",
  autor: "Colleen Hoover",
  ano: "2018",
  situacao: "novo",
  preco: "40.00",
  qtd: 0
};

describe("<ItemCart />", () => {
  it("should render without crashing", () => {
    shallow(<ItemCart item={item} />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<ItemCart item={item} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("clicou no botão e chamou a função", () => {
    const mock = jest.fn();
    const wrapper = shallow(<ItemCart item={item} deleteItem={mock} />);

    wrapper.find(".btnLixeira").simulate("click");

    expect(mock).toHaveBeenCalled();
  });
});
