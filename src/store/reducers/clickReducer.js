import { CLICK_UPDATE_VALUE } from "../../constants/actionTypes";

const initialState = {
  newValue: "Atualizado via Redux!",
  livros: [
    {
      imagem: "book1.png",
      titulo: "É Assim Que Acaba",
      genero: "romance",
      autor: "Colleen Hoover",
      ano: "2018",
      situacao: "novo",
      preco: "40.00"
    },
    {
      imagem: "book2.png",
      titulo: "Tarde Demais",
      genero: "drama",
      autor: "Colleen Hoover",
      ano: "2016",
      situacao: "usado",
      preco: "18.00"
    },
    {
      imagem: "book3.png",
      titulo: "Neuromancer",
      genero: "ficção cientifica",
      autor: "William Gibson",
      ano: "2010",
      situacao: "novo",
      preco: "32.90"
    },
    {
      imagem: "book4.png",
      titulo: "It - A coisa",
      genero: "terror",
      autor: "Stephen King",
      ano: "1990",
      situacao: "usado",
      preco: "29.50"
    },
    {
      imagem: "book5.png",
      titulo: "Game of Thrones",
      genero: "fantasia",
      autor: "George Martin",
      ano: "2000",
      situacao: "novo",
      preco: "25.00"
    },
    {
      imagem: "book2.png",
      titulo: "Tarde Demais",
      genero: "drama",
      autor: "Colleen Hoover",
      ano: "2016",
      situacao: "usado",
      preco: "18.00"
    },
    {
      imagem: "book3.png",
      titulo: "Neuromancer",
      genero: "ficção cientifica",
      autor: "William Gibson",
      ano: "2010",
      situacao: "novo",
      preco: "32.90"
    },
    {
      imagem: "book4.png",
      titulo: "It - A coisa",
      genero: "terror",
      autor: "Stephen King",
      ano: "1990",
      situacao: "usado",
      preco: "29.50"
    }
  ]
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
