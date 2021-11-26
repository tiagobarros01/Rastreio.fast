import axios from 'axios';

const trackAPI = axios.create({
  baseURL: 'https://correios.contrateumdev.com.br/api/',
});

const cepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export { trackAPI, cepAPI };
