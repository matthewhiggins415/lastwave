import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { Container, Form, Input, Button } from '../styles/RegisterScreen.styles'

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    email: '', 
    password: '', 
    password2: ''
  })

  const { email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    } 

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault(e)

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        email, 
        password, 
        password2
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <Container>
        <h1>Register</h1>
        <Form>
          <Input type="text" name="email" value={email} placeholder="enter email" onChange={onChange}/>
          <Input type="password" name="password" value={password} placeholder="enter pw" onChange={onChange}/>
          <Input type="password" name="password2" value={password2} placeholder="confirm pw" onChange={onChange}/>
          <Button type="submit" onSubmit={onSubmit}>Submit</Button>
        </Form>
    </Container>
  )
}

export default RegisterScreen