import React from "react";
import { shallow } from "enzyme";
import CardConnected, { Card } from "./Card";
const livro = {
  imagem: "book1.png",
  titulo: "É Assim Que Acaba",
  genero: "romance",
  autor: "Colleen Hoover",
  ano: "2018",
  situacao: "novo",
  preco: "40.00",
  qtd: 0
};

describe("<Card />", () => {
  it("should render without crashing", () => {
    shallow(<Card livro={livro} />);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Card livro={livro} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("clicou no botão e chamou a função", () => {
    const mock = jest.fn();
    const wrapper = shallow(<Card livro={livro} addItemCarrinho={mock} />);

    console.log(wrapper);

    wrapper.find(".btnComprar").simulate("click");

    expect(mock).toHaveBeenCalled();
  });
});
