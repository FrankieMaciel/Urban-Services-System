import axios from 'axios';

const apiBaseUrl: string =  "http://localhost:3000";

export default axios.create({
    baseURL: apiBaseUrl,
    headers: { 'Access-Control-Allow-Origin': '*' },
});