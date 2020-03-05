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

export const showModal = (status) => ({
  type: livros.SHOW,
  payload: { status }
});

export const excluirItem = (titulo) => ({
  type: livros.REMOVER_ITEM,
  payload: { titulo }
});
