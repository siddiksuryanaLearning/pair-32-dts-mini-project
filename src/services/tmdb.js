import axios from 'axios';

const tmdbInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'a313b37b5485fd252679d0786c0c3521',
  },
});

export default tmdbInstance;
