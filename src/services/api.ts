import axios from 'axios'

export const api = axios.create({
    // baseURL: import.meta.env.URL_DEVELOPMENT
    baseURL: 'http://localhost:3000'
})