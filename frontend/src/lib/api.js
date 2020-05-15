import axios from 'axios'
// import { getToken } from './auth' //* will need later for withHEaders authorization

const baseUrl = 'localhost:8000/api'

export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}