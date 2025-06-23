import axios from 'axios';

export const taskApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_DATA_API_URL,
});

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});
