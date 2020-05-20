import axios from 'axios'
// import { getToken } from './auth'

// const withHeaders = () => {
//   return {
//     headers: { Authorization: `Bearer ${getToken()}` }
//   }
// }

export const baseUrl = '/api'

// export const getProfile = () => {
//   return axios.get(`${baseUrl}/profile`, withHeaders)
// }

export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const getAllTrips = () => {
  return axios.get(`${baseUrl}/trips`)
}

export const getSingleTrip = id => {
  return axios.get(`${baseUrl}/trips/${id}`)
}

export const editTrip = (id, formData) => {
  return axios.put(`${baseUrl}/trips/${id}`, formData)
}

export const editProfile = (id, userData) => {
  return axios.put(`${baseUrl}/profile/${id}/edit`, userData )
}