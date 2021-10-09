import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:58505/'
  });
  export default instance;