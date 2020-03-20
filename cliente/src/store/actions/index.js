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

export const showCompra = status => ({
  type: livros.SHOW_MODAL_COMPRA,
  payload: { status }
});

export const getLivros = list => ({
  type: livros.GET_LIVROS,
  payload: { list }
});

export const getLogin = login => ({
  type: livros.GET_LOGIN,
  payload: { login }
});

export const isAdm = adm => ({
  type: livros.IS_ADM,
  paylod: { adm }
});

export const updatePass = user => ({
  type: livros.GET_PASSWORD,
  payload: { user }
});

export const createUser = user => ({
  type: livros.NEW_USER,
  payload: { user }
});

export const insertBookItem = insert => ({
  type: livros.INSERT_BOOK,
  payload: { insert }
});

export const setTitulo = livro => ({
  type: livros.SET_TITULO, 
  payload: {livro}
})
