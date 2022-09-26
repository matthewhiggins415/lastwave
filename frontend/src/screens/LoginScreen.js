import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { Container, Form, Input, Button, RedirectLink } from '../styles/RegisterScreen.styles'
import { signIn } from '../api/auth'

const LoginScreen = ({ notify, setUser }) => {
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  })

  const [navigate, setNavigate] = useState(false) 

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSignIn = async (e) => {
    e.preventDefault()

    try {
      let res = await signIn(formData)
      // console.log(res)
      // set the user   
      setUser(res.data.user)

      // navigate to products screen
      setNavigate(true)

      // notify user of successful login
      notify('login successful')
    } catch(e) {
      setFormData({ email: '', password: '' })
      notify('login denied', 'danger')
    }
  }

  if (navigate) {
    return <Navigate to='/products' /> 
  }

  return (
    <Container>
        <h1>Login</h1>
        <Form onSubmit={onSignIn}>
          <Input type="text" name="email" value={email} placeholder="enter email" onChange={onChange}/>
          <Input type="password" name="password" value={password} placeholder="enter pw" onChange={onChange}/>
          <Button type="submit">Submit</Button>
        </Form>
        <RedirectLink to='/register'>Register</RedirectLink>
    </Container>
  )
}

export default LoginScreen