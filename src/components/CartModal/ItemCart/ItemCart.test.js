import React from "react";
import { shallow } from "enzyme";
import ItemCartConnected, {ItemCart} from "./";

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
    shallow(<ItemCartConnected item={item}/>);
  });
  it("should render basic infos", () => {
    const wrapper = shallow(<ItemCartConnected item={item}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
