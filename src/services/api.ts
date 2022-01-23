import axios from 'axios';

const { REACT_APP_TRACK_USER, REACT_APP_TRACK_TOKEN } = process.env;

const trackAPI = axios.create({
  baseURL: `https://api.linketrack.com/track/json?user=${REACT_APP_TRACK_USER}&token=${REACT_APP_TRACK_TOKEN}`,
});

const cepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export { trackAPI, cepAPI };
