import styled from 'styled-components'

export const Container = styled.div`
    min-height: 90vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    width: 40%;
    min-width: 500px;
    margin: 15px auto;
  }
`

export const H1 = styled.h1`
  text-align: center;
`

export const AdminProductScreenHeader = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

export const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: white;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer; 
`