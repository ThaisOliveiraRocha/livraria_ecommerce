import * as livros from "../../constants/actionTypes";

const initialState = {
  carrinho: [],
  livros: [],
  detalhes: {},
  removeModal: false,
  selectedTitle: "",
  modalCompra: false,
  user: {},
  isAdm: 0
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
    case livros.REMOVE:
      return {
        ...state,
        carrinho: state.carrinho.filter(
          livro => livro.titulo !== state.selectedTitle
        ),
        removeModal: false
      };
    case livros.SHOW:
      return {
        ...state,
        removeModal: action.payload.status,
        selectedTitle: action.payload.titulo
      };
    case livros.SHOW_MODAL_COMPRA:
      return {
        ...state,
        modalCompra: action.payload.status
      };
    case livros.GET_LIVROS:
      return {
        ...state,
        livros: action.payload.list
      };
    case livros.GET_LOGIN:
      return {
        ...state,
        user: action.payload.login
      };
    case livros.IS_ADM:
      return {
        ...state,
        isAdm: action.payload.adm
      };
    case livros.GET_PASSWORD:
      return {
        ...state,
        user: action.payload.user
      };
    case livros.NEW_USER:
      return {
        ...state,
        user: action.payload.user
      };

    default:
      return state;
  }
};
