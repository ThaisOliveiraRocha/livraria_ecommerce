import axios from "axios";

export const getBooks = () => axios.get("http://localhost:5001/produtos");
export const authenticateUser = (body) => axios.post("http://localhost:5001/users/login", body);