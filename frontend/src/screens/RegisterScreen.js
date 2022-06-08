import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { Container, Form, Input, Button } from '../styles/RegisterScreen.styles'
import axios from 'axios'

const RegisterScreen = ({ notify }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    password: '', 
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      notify('passwords do not match', 'warning')
    } else {
      const userData = {
        name,
        email, 
        password, 
        password2
      }

      const registerUser = async (data) => {
        let response = await axios.post('/api/users', userData)
        console.log(response)
      }

      registerUser(userData)
    }
  }

  return (
    <Container>
        <h1>Register</h1>
        <Form>
          <Input type="text" name="name" value={name} placeholder="Name" onChange={onChange}/>
          <Input type="text" name="email" value={email} placeholder="Email" onChange={onChange}/>
          <Input type="password" name="password" value={password} placeholder="Password" onChange={onChange}/>
          <Input type="password" name="password2" value={password2} placeholder="Confirm Password" onChange={onChange}/>
          <Button type="submit" onSubmit={onSubmit}>Submit</Button>
        </Form>
    </Container>
  )
}

export default RegisterScreen