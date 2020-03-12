import React from "react";
import { shallow } from "enzyme";
import { Details } from "./Details";

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

describe("<Details />", () => {
  it("should render without crashing", () => {
    shallow(<Details detalhes={livro}/>);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Details detalhes={livro}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
