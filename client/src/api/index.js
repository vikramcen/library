import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const register = payload => api.post(`/user/register`, payload)
export const login = payload => api.post(`/user/login`, payload)
export const createBook = payload => api.post('/book', payload)
export const getAllBooks = payload => api.get('/book', payload)

const apis = {
  register,
  login,
  createBook,
  getAllBooks,
}

export default apis