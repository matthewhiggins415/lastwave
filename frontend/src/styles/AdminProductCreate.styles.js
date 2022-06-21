import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  align-items: center;
  margin: 0 auto;
`

export const AdminProductCreateScreenHeader = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
`

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-top: 5px;
  border-radius: 3px;
  border: 1px solid black;
`

export const Button = styled.button`
  padding: 10px;
  background-color: #F5F5F5;
  border: 1px solid black;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid black;
`

export const BackButton = styled.button`
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
`

export const ImageUploadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px auto;
`

export const ImageInput = styled.input`
 width: auto;
 padding: 10px;
 border: 1px solid black;
`
export const ImageButton = styled.button`
  padding: 10px;
  background-color: #F5F5F5;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid black;
`

export const Image = styled.img`
  height: 50px;
  width: 50px;
  background-color: black;
`