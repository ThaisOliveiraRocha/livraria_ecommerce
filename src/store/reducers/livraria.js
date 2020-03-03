import * as livros from "../../constants/actionTypes";

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
  detalhes: {}
};

export const livrariaReducer = (state = initialState, action) => {
  switch (action.type) {
    case livros.ADD_EDIT_BOOK:
      const livroIndex = state.carrinho.findIndex(
        livro => livro.titulo === action.payload.livro.titulo
      );
      const index = livroIndex > -1 ? livroIndex : state.carrinho.length;
      return {
        ...state,
        carrinho: [
          ...state.carrinho.slice(0, index),
          {
            ...action.payload.livro,
            qtd: state.carrinho[index] ? state.carrinho[index].qtd + 1 : 1
          },
          ...state.carrinho.slice(index + 1)
        ]
      };
    case livros.GET_DETAILS:
      return {
        ...state,
        detalhes: action.payload.livro
      };
    case livros.GET_CART_ITEMS:
      return {
        ...state,
        carrinho: action.payload.livro
      };

    default:
      return state;
  }
};
