import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 5px auto;
  padding: 10px;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  /* background-color: #F5F5F5; */
`

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  color: white;
  background-color: black;
  border: 1px solid black;
  border-radius: 4px;
`

export const DeleteButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: red;
  color: white;
  border: 1px solid red;
  border-radius: 4px;
`