import axios from 'axios'
// import { getToken } from './auth' //* will need later for withHeaders authorization

const baseUrl = '/api'

export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const getAllTrips = () => {
  return axios.get(`${baseUrl}/trips`)
}