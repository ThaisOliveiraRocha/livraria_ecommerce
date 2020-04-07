import axios from "axios";

export const getBooks = () => axios.get("http://localhost:5001/books/get-books");
export const insertBook = (body) => axios.post("http://localhost:5001/books/insert", body);
export const updateBook = (body) => axios.put("http://localhost:5001/books/update-books", body);
export const deleteBook = (body) => axios.post("http://localhost:5001/books/delete-books", body);

export const authenticateUser = (body) => axios.post("http://localhost:5001/users/login", body);
export const updatePassword = (body) => axios.put(`http://localhost:5001/users/change-password/${body.email}`, body);
export const insertNewUser = (body) => axios.post("http://localhost:5001/users/create", body);
export const deleteUser = (body) => axios.delete(`http://localhost:5001/users/delete`, body);

export const setUserSession = (info) => localStorage.setItem("userSession", info);
export const getUserSession = () => localStorage.getItem("userSession");
