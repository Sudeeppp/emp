import axios from 'axios'

const API = "http://localhost:6000/api/auth"

// export const login = (email, password) => {
//     return axios.post(API + '/login', {
//         email,
//         password
//     })
// }

export const login = async (email, password) => {
    const res = await axios.post(`${API}/login`, { email, password })
    return res.data;
}