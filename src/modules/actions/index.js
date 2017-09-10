import axios from 'axios';

export const API_HOSTNAME = 'localhost';
export const API_PORT = '1337';
export const API_VERSION = '';
//export const API_ENDPOINT = `http://${API_HOSTNAME}:${API_PORT}/${API_VERSION}`;
export const API_ENDPOINT = `http://${API_HOSTNAME}:${API_PORT}`;

export const axiosInstance = axios.create({
  "baseURL": `${API_ENDPOINT}`,
  "timeout": 5000,
});