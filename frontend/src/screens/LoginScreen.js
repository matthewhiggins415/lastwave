import { useState, useEffect } from 'react'
import { Container, Form, Input, Button } from '../styles/RegisterScreen.styles'


const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
        <h1>Login</h1>
        <Form>
          <Input type="text" name="email" value={email} placeholder="enter email" onChange={onChange}/>
          <Input type="password" name="password" value={password} placeholder="enter pw" onChange={onChange}/>
          <Button type="submit" onSubmit={onSubmit}>Submit</Button>
        </Form>
    </Container>
  )
}

export default LoginScreen