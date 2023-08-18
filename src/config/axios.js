import axios from "axios";

const api = axios.create({
  baseURL: 'https://extranet.cebraspe.org.br/AvaliacaoCSA/BackEnd/',
});

export default api;
