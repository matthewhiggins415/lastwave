import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Container, ProductDetailsContainer, ProductDetails, DetailContainer, Image, BackBtn, CheckoutBtn, ImgContainer } from '../styles/ProductScreen.styles'
import { addItemToCart } from '../api/cart'
import apiUrl from '../apiConfig'

const ProductScreen = ({ user, notify, setUser }) => {
  let { id } = useParams()
  
  let navigate = useNavigate()

  const [product, setProduct] = useState({})
  const [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      let res = await axios.get(`${apiUrl}/products/${id}`)
      setProduct(res.data.product)
      setImgSrc(`${apiUrl}/${res.data.product.imageOne}`)
      console.log(res.data.product)
    }

    fetchProduct()
  }, [])

  const handleClick = () => {   
    if (user && user.isAdmin) {
      notify('signed in as admin', 'warning')
    } else if (user) {
      addToCart()
    } else {
      navigate('/login')
      notify('not logged in', 'danger')
    }
  }

  const addToCart = async () => {
    try {
      let res = await addItemToCart(user, id)
      console.log("res", res)
      notify('item added to cart')
      navigate("/cart")
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  const handleImageClick = (img) => {
    let imgSrc = apiUrl + "/" + img
    setImgSrc(imgSrc)
  }

  const styleOne = {
    backgroundImage: `url(${apiUrl}/${product.imageOne})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50px', 
    width: '50px',
    cursor: 'pointer',
    height: '50px',
    width: '50px',
    border: 'none',
    outline: 'none',
    'border-radius': '5px'
  }

  const styleTwo = {
    backgroundImage: `url(${apiUrl}/${product.imageTwo})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50px', 
    width: '50px',
    cursor: 'pointer',
    height: '50px',
    width: '50px',
    border: 'none',
    outline: 'none',
    'border-radius': '5px'
  }

  const styleThree = {
    backgroundImage: `url(${apiUrl}/${product.imageThree})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50px', 
    width: '50px',
    cursor: 'pointer',
    height: '50px',
    width: '50px',
    border: 'none',
    outline: 'none',
    'border-radius': '5px'
  }

  const styleFour = {
    backgroundImage: `url(${apiUrl}/${product.imageFour})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50px', 
    width: '50px',
    cursor: 'pointer',
    height: '50px',
    width: '50px',
    border: 'none',
    outline: 'none',
    'border-radius': '5px'
  }


  return (
    <>
    <BackBtn to="/products">Back</BackBtn>
    <Container>
      <ProductDetailsContainer>
        <Image src={imgSrc}/>
        <ImgContainer>
          <button onClick={() => handleImageClick(product.imageOne)} style={styleOne}></button>
          <button onClick={() => handleImageClick(product.imageTwo)} style={styleTwo}></button>
          <button onClick={() => handleImageClick(product.imageThree)} style={styleThree}></button>
          <button onClick={() => handleImageClick(product.imageFour)} style={styleFour}></button>
        </ImgContainer>
        <ProductDetails>
          <DetailContainer>
            <h1>{product.name}</h1>
          </DetailContainer>
          <DetailContainer>
            <h3>{product.description}</h3>
          </DetailContainer>
          <DetailContainer>
            <h2>{`Price: $${product.price}`}</h2>
          </DetailContainer>
          <DetailContainer>  
            <p>24 sold</p>
            <p>4.9 &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</p>
          </DetailContainer>
          <CheckoutBtn onClick={() => {handleClick()}}>Add to Cart</CheckoutBtn>
        </ProductDetails>
      </ProductDetailsContainer>
    </Container>
    </>
  )
}

export default ProductScreen