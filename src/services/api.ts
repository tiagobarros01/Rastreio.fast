import axios from 'axios';

const trackAPI = axios.create({
  baseURL: 'https://api.rastrearpedidos.com.br/api/rastreio/',
});

const cepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws/09370360/json/',
});

export { trackAPI, cepAPI };
