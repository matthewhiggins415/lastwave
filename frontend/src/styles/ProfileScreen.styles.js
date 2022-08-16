import styled from 'styled-components'

export const Container = styled.div`
  min-height: 90vh;

  @media (min-width: 700px) {
    width: 40%;
    min-width: 500px;
    margin: 15px auto;
  }
`

export const H1 = styled.h1`
  padding: 20px;
`

export const ProfileDivContainer = styled.div`
  min-height: 10vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: auto;
  width: 90%;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  padding: 10px;
`

export const ProfileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  border: 1px solid gold;
  background-color: gold;
  color: black; 
  padding: 5px;
  border-radius: 4px;
  min-width: 50px;
  cursor: pointer;
`

export const P = styled.p`
  padding: 2px;
`

export const H4 = styled.h4`
  margin-bottom: 5px;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const Input = styled.input`
  padding: 5px;
  width: 100%;
`