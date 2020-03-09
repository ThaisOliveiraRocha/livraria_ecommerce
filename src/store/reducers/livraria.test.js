import React from "react";
import { shallow } from "enzyme";

import { livrariaReducer } from "./livraria";
import {
  ADD_EDIT_BOOK,
  GET_DETAILS,
  GET_CART_ITEMS,
  REMOVE,
  SHOW,
  REMOVER_ITEM,
  SHOW_MODAL_COMPRA
} from "../../constants/actionTypes";

const initialState = {
  carrinho: [],
  livros: [
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
  ],
  detalhes: {},
  removeModal: false,
  selectedTitle: "",
  modalCompra: false
};

describe("Livraria reducer", () => {
  it("returns initial state", () => {
    expect(livrariaReducer(undefined, {})).toEqual(initialState);
  });
});
