import { Navigate } from 'react-router-dom'
import { useState } from 'react'
// import Spinner from '../components/Spinner'
import { Container, Form, Input, Button, Link } from '../styles/RegisterScreen.styles'
import { signUp } from '../api/auth'
import { createCart } from '../api/cart'
import apiUrl from '../apiConfig'

const RegisterScreen = ({ notify, setUser }) => {
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    password: '', 
    passwordConfirmation: ''
  })

  const { name, email, password, passwordConfirmation } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onRegister = async (e) => {
    e.preventDefault()
    try {
      // api call 
      if (formData.password !== formData.passwordConfirmation) {
        notify('passwords do NOT match', 'danger')
      } else if (!formData.password || !formData.passwordConfirmation || !formData.email) {
        notify('missing input', 'danger')
        return
      } else {
        let res = await signUp(formData)
        console.log("res", res)
        // success message
        notify('registration successful')
        // create the cart
        // set user 
        setUser(res.data.user)

        // redirect to products 
        setShouldNavigate(true)
      }

    } catch(e) {
      console.log(e)
      // empty form inputs
      setFormData({
        name: "", 
        email: '', 
        password: '', 
        passwordConfirmation: ''
      })

      // danger message 
      notify('registration failed', 'danger')
    }
  }

  if (shouldNavigate) {
    return <Navigate to="/products" />
  }

  return (
    <>
    <Container>
        <h1>Register</h1>
        <Form onSubmit={onRegister}>
          <Input type="text" name="name" value={name} placeholder="Name" onChange={onChange}/>
          <Input type="text" name="email" value={email} placeholder="Email" onChange={onChange}/>
          <Input type="password" name="password" value={password} placeholder="Password" onChange={onChange}/>
          <Input type="password" name="passwordConfirmation" value={passwordConfirmation} placeholder="Confirm Password" onChange={onChange}/>
          <Button type="submit">Submit</Button>
        </Form>
        <Link href={'http://localhost:3000/login'}>Login</Link>
    </Container>
    </>
  )
}

export default RegisterScreen