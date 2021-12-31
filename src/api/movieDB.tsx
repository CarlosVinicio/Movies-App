import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '06c3818d99ffcf20828bcbb8de23f663',
    languaje: 'es-ES',
  },
});

export default movieDB;
