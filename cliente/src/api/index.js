import axios from "axios";

export const getBooks = () => axios.get("http://localhost:5001/produtos");
export const authenticateUser = (body) => axios.post("http://localhost:5001/users/login", body);
export const updatePassword = (body) => axios.put(`http://localhost:5001/users/change-password/${body.email}`, body);
export const insertNewUser = (body) => axios.post("http://localhost:5001/users/create", body);
export const deleteUser = (body) => axios.delete(`http://localhost:5001/users/delete/:${body.email}`, body);