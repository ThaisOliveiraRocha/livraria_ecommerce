import * as livros from "../../constants/actionTypes";

export const addEditCarrinho = livro => ({
  type: livros.ADD_EDIT_BOOK,
  payload: { livro }
});

export const getDetail = livro => ({
  type: livros.GET_DETAILS,
  payload: { livro }
});

export const getCarrinho = livro => ({
  type: livros.GET_CART_ITEMS,
  payload: { livro }
});

export const removeLivro = () => ({
  type: livros.REMOVE
});

export const showModal = (titulo, status) => ({
  type: livros.SHOW,
  payload: { titulo, status }
});
