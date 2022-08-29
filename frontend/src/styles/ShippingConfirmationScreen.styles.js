import styled from "styled-components"

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  min-width: 315px;
  margin: 30px auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  margin: 5px auto;
  outline: none;
`

export const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 4px;
`