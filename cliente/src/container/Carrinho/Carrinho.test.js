import React from "react";
import { shallow } from "enzyme";
import {Carrinho} from "./Carrinho";

const carrinho = [
  {
    imagem: "book1.png",
    titulo: "É Assim Que Acaba",
    genero: "romance",
    autor: "Colleen Hoover",
    ano: "2018",
    situacao: "novo",
    preco: "40.00",
    qtd: 0
  },
  {
    imagem: "book2.png",
    titulo: "Tarde Demais",
    genero: "drama",
    autor: "Colleen Hoover",
    ano: "2016",
    situacao: "usado",
    preco: "18.00",
    qtd: 0
  },
  {
    imagem: "book3.png",
    titulo: "Neuromancer",
    genero: "ficção cientifica",
    autor: "William Gibson",
    ano: "2010",
    situacao: "novo",
    preco: "32.90",
    qtd: 0
  },
  {
    imagem: "book4.png",
    titulo: "It - A coisa",
    genero: "terror",
    autor: "Stephen King",
    ano: "1990",
    situacao: "usado",
    preco: "29.50",
    qtd: 0
  },
  {
    imagem: "book5.png",
    titulo: "Game of Thrones",
    genero: "fantasia",
    autor: "George Martin",
    ano: "2000",
    situacao: "novo",
    preco: "25.00",
    qtd: 0
  }
];

describe("<Carrinho />", () => {
  const history= {
    push: jest.fn()
  }

  it("should render without crashing", () => {
    shallow(<Carrinho carrinho={carrinho}/>);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<Carrinho carrinho={carrinho}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it("clicou no botão >Finalizar< e chamou a função", () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <Carrinho carrinho={carrinho} showCompra={mock} />
    );

    wrapper.find(".btnFinalizar").simulate("click");

    expect(mock).toHaveBeenCalled();
  });
  it("clicou no botão >Cancelar< e chamou a função", () => {
    const wrapper = shallow(
      <Carrinho carrinho={carrinho} history={history} />
    );

    wrapper.find(".btnCancelar").simulate("click");

    expect(history.push).toHaveBeenCalled();
  });
});
