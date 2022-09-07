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
  margin: 2rem auto;
`

export const NumContainer = styled.div`
  width: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 5px;
  margin-bottom: 10px;
`

export const StatsSection = styled.div`
  display: flex;
  margin-top: 30px;
`