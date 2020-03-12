import axios from "axios";

export const getBooks = () => axios.get("http://localhost:5000/produtos");
