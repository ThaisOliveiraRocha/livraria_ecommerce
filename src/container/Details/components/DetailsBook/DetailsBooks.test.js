import React from "react";
import { shallow } from "enzyme";
import { DetailsBook } from "./DetailsBook";

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

describe("<DetailsBook />", () => {
  it("should render without crashing", () => {
    shallow(<DetailsBook livro={livro}/>);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<DetailsBook livro={livro}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it("clicou no botão e chamou a função", () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <DetailsBook livro={livro} addItemCarrinho={mock} />
    );

    wrapper.find(".btnAdicionarCarrinho").simulate("click");

    expect(mock).toHaveBeenCalled();
  });
});
