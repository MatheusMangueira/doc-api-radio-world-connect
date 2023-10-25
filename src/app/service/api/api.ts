import axios from 'axios';

const baseUrl = 'https://radio-world-connect.onrender.com';

export const api = axios.create({
  baseURL: baseUrl,
});
