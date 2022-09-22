import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 80%;
    max-width: 350px;
    margin: 25px auto;
  }

  @media only screen and (min-width: 500px) {
    max-width: 500px;
    margin: 0 auto;
  }
`

export const Form = styled.form`
  width: 100%;
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
  border-radius: 4px;
  background-color: black;
  color: white;
  border: none;
  text-decoration: none;
  cursor: pointer;
`