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

export const NumsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px auto;
`

export const NumsDiv = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: auto;
`

export const ControlsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
`

export const ControlBtn = styled.button`
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  background-color: white;
`