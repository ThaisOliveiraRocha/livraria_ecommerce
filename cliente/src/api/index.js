import axios from "axios";

export const getBooks = () => axios.get("http://localhost:5000/produtos");
export const authenticateUser = (body) => axios.authenticate("http://localhost:5000/user", body);