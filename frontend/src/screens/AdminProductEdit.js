import React, { useState, useEffect } from 'react'
import { Container, Form, ImageButton, Image, Input, Button, BackButton, ImageInput, AdminProductCreateScreenHeader, ImageUploadContainer } from '../styles/AdminProductCreate.styles'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { retrieveProduct, editAProduct } from '../api/admin/products'
import axios from 'axios'
import apiUrl from '../apiConfig'

const AdminProductEdit = ({ notify, user }) => {
  let { id } = useParams()


  const [product, setProduct] = useState({})
  
  const [name, setName] = useState('')
  const [imageOne, setImageOne] = useState('')
  // const [imageTwo, setImageTwo] = useState('')
  // const [imageThree, setImageThree] = useState('')
  // const [imageFour, setImageFour] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('category')
  const [price, setPrice] = useState(0)
  const [numOfReviews, setNumOfReviews] = useState(0)
  const [reviewRating, setReviewRating] = useState(0)

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(apiUrl)
      let res = await axios.get(`/products/${id}`)
      console.log("product useEffect", res.data.product)
      setImageOne(res.data.product.imageOne)
      setProduct(res.data.product)
      setName(res.data.product.name)
      setDescription(res.data.product.description)
      setCategory(res.data.product.category)
      setPrice(res.data.product.price)
      setNumOfReviews(res.data.product.numOfReviews)
      setReviewRating(res.data.product.reviewRating)
    }
    
    fetchProduct()
  }, [])
  
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate("/admin/products")
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    let newProduct = {
      name: name,
      price: price, 
      description: description,
      imageOne: imageOne, 
      // imageTwo: imageTwo, 
      // imageThree: imageThree, 
      // imageFour: imageFour,
      category: category,
      reviewRating: reviewRating,
      numOfReviews: numOfReviews
    }
    
    try {
      let res = await editAProduct(user, id, newProduct)
      
      if (res.data.updatedProduct) {
        navigate("/admin/products")
        notify("product updated")
      } else {
        notify("something went wrong", "danger")
      }
    } catch(err) {
      console.log(err)
    }
  }
  
  const uploadSelectedHandlerImageOne = (e) => {
    console.log("upload selected handler image", e.target.files)
    setImageOne(e.target.files[0])
  }
  
  const fileUploadHandlerImageOne = async () => {
    const fd = new FormData()
    fd.append('image', imageOne, imageOne.name)
    
    try {
      const config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      let res = await axios.post(`${apiUrl}/api/upload`, fd, {
        onUploadProgress: progressEvent => {
          console.log("Upload progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
        }
      }, config)
      console.log(res)
      setImageOne(res.data)
    } catch(err) {
      console.error(err)
    }
  }

  console.log("imageurl", `${apiUrl} + "/" + ${imageOne}`)
  
  // const uploadSelectedHandlerImageTwo = (e) => {
    //   console.log(e.target.files[0])
  //   setImageTwo(e.target.files[0])
  //  }

  // const fileUploadHandlerImageTwo = async () => {
  //   const fd = new FormData()
  //   fd.append('image', imageTwo, imageTwo.name)

  //   try {
  //     const config = {
  //       headers: {'Content-Type': 'multipart/form-data'}
  //     }
  //     let res = await axios.post(`${apiUrl}/api/upload`, fd, {
  //       onUploadProgress: `progressEvent => {
  //         console.log("Upload progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
  //       }
  //     }, config)
  //     console.log(res)
  //     setImageTwo(res.data)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  // const uploadSelectedHandlerImageThree = (e) => {
  //   console.log(e.target.files[0])
  //   setImageThree(e.target.files[0])
  //  }

  // const fileUploadHandlerImageThree = async () => {
  //   const fd = new FormData()
  //   fd.append('image', imageThree, imageThree.name)

  //   try {
  //     const config = {
  //       headers: {'Content-Type': 'multipart/form-data'}
  //     }
  //     let res = await axios.post(`${apiUrl}/api/upload`, fd, {
  //       onUploadProgress: progressEvent => {
  //         console.log("Upload progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
  //       }
  //     }, config)
  //     console.log(res)
  //     setImageThree(res.data)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  // const uploadSelectedHandlerImageFour = (e) => {
  //   console.log(e.target.files[0])
  //   setImageFour(e.target.files[0])
  //  }

  // const fileUploadHandlerImageFour = async () => {
  //   const fd = new FormData()
  //   fd.append('image', imageFour, imageFour.name)

  //   try {
  //     const config = {
  //       headers: {'Content-Type': 'multipart/form-data'}
  //     }
  //     let res = await axios.post(`${apiUrl}/api/upload`, fd, {
  //       onUploadProgress: progressEvent => {
  //         console.log("Upload progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
  //       }
  //     }, config)
  //     console.log(res)
  //     setImageFour(res.data)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  return (
    <Container>
      <AdminProductCreateScreenHeader>
        <BackButton onClick={handleClick}>Back</BackButton>
        <h1>Create a Product</h1>
      </AdminProductCreateScreenHeader>
        <label>Required you add an image</label>
        <ImageUploadContainer>
          <Image style={{height: "60px", }} src={apiUrl + "/" + imageOne}/>
          <ImageInput name="imageOne" type="file" onChange={uploadSelectedHandlerImageOne} accept="image/*, .pdf, .png, .jpg"/>
          <ImageButton onClick={fileUploadHandlerImageOne}>Upload</ImageButton>
        </ImageUploadContainer>
        {/* <label>Required you add another image</label>
        <ImageUploadContainer>
          <Image style={{height: "60px", }} src={apiUrl + "/" + imageTwo}/>
          <ImageInput name="imageTwo" type="file" onChange={uploadSelectedHandlerImageTwo} accept="image/*, .pdf, .png, .jpg" required/>
          <ImageButton onClick={fileUploadHandlerImageTwo}>Upload</ImageButton>
        </ImageUploadContainer>
        <ImageUploadContainer>
          <Image style={{height: "60px", }} src={apiUrl + "/" + imageThree}/>
          <ImageInput name="imageThree" type="file" onChange={uploadSelectedHandlerImageThree} accept="image/*, .pdf, .png, .jpg" required/>
          <ImageButton onClick={fileUploadHandlerImageThree}>Upload</ImageButton>
        </ImageUploadContainer>
        <ImageUploadContainer>
          <Image style={{height: "60px", }} src={apiUrl + "/" + imageFour}/>
          <ImageInput name="imageFour" type="file" onChange={uploadSelectedHandlerImageFour} accept="image/*, .pdf, .png, .jpg" required/>
          <ImageButton onClick={fileUploadHandlerImageFour}>Upload</ImageButton>
        </ImageUploadContainer> */}
      <Form>
        <label>Name of product</label>
        <Input value={name} name="name" type="text" onChange={(e) => {setName(e.target.value)}}/>
        <label>Description of product</label>
        <Input value={description} name="description" type="text-area" placeholder="description" onChange={(e) => {setDescription(e.target.value)}}/> 
        <label>Category of product</label>  
        <Input value={category} name="category" type="text" placeholder="category" onChange={(e) => {setCategory(e.target.value)}}/>
        <label>Price of product, number no decimals ($)</label>  
        <Input value={price} name="price" type="number"  placeholder="price" onChange={(e) => {setPrice(e.target.value)}}/>
        <label>Number of Reviews</label>  
        <Input value={numOfReviews} name="numOfReviews" type="number"  placeholder="number of reviews" onChange={(e) => {setNumOfReviews(e.target.value)}}/>
        <label>Average review rating</label>  
        <Input value={reviewRating} name="reviewRating" type="number"  placeholder="average rating of reviews" onChange={(e) => {setReviewRating(e.target.value)}}/>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  )
}

export default AdminProductEdit