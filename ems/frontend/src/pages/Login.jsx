import React, { useState } from 'react'
import useAuth from '../context/AuthContext'
import { login } from '../services/authService'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  
  const { loginUser } = useAuth()
  const navigate  = useNavigate()
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userData = await login(form.email, form.password)
      loginUser(userData);
      console.log(userData)
      navigate('/dashboard')
     
    } catch (error) {
      //  setError(error.message)
      setError(error.response.data.message)
      // setError(error.response?.data?.message || "Login Failed")
    }
  }


  return (

    <form onSubmit={handleSubmit}>
      <h2>Login Page</h2>
      <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name='password' value={form.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
      </form>
  )
}
export default Login