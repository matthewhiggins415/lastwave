import styled from 'styled-components'

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;

  @media (min-width: 700px) {
    width: 40%;
    min-width: 500px;
    margin: 25px auto;
  }
`

export const OrderDetailsSummaryContainer = styled.div`
  border: 1px solid gray;
  width: 95%;
  margin: 10px auto;
  border-radius: 4px;
  padding: 10px;
`
export const SummaryDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`