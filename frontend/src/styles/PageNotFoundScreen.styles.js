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
