import axios from 'axios';

const trackAPI = axios.create({
  baseURL: 'https://correios.contrateumdev.com.br/api/',
  method: 'POST',
  data: {
    code: 'ON931559908BR',
    type: 'LS',
},
});

const cepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export { trackAPI, cepAPI };
