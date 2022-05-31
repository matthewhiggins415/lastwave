import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  max-width: 450px;
  min-width: 420px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  border: 1px solid black;
  outline: none;
`

export const Button = styled.button`
  padding: 15px;
  margin: 5px;
  background-color: black;
  color: white;
  border: none;
  text-decoration: none;
  cursor: pointer;
`