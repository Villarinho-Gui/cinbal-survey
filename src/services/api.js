import axios from 'axios'

export const api = axios.create({
  // baseURL: import.meta.env.URL_DEVELOPMENT
  baseURL: 'http://10.152.6.203:3000',
})
