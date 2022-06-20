import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { retrieveProducts, createAProduct, deleteAProduct } from '../api/admin/products'
import AdminProduct from '../components/AdminProduct'
import { Container, H1, AdminProductScreenHeader, Button } from '../styles/AdminProductsScreen.styles'

const AdminProductsScreen = ({ user, notify }) => {
  const [products, setProducts] = useState([])

  let navigate = useNavigate()
  
  useEffect(() => {
    const fetchProducts = async () => {
      let res = await retrieveProducts()
      setProducts(res.data.products)
    }

    fetchProducts()
  }, [])
  
  if (!user) {
    notify('not logged in', 'danger')
    navigate('/login')
  }
  
  const createProduct = async (user) => {
    let res = await createAProduct(user)

    let newProduct = res.data.createdProduct
    let id = newProduct._id
    navigate(`/admin/edit-product/${id}`)
    notify("new product created")
  }

  const deleteProduct = async (id) =>{
    let res = await deleteAProduct(user, id)
    setProducts(res.data.products)
    notify("product deleted")
  }

  const handleClick = async () => {
    createProduct(user)
  }

  return (
    <Container>
      <AdminProductScreenHeader>
        <H1>Admin Products</H1>
        <Button onClick={handleClick}>Add Product</Button>
      </AdminProductScreenHeader>
      {products.map((item, index) => {
        return (
          <AdminProduct user={user} notify={notify} item={item} key={index} index={index} id={item._id} deleteProduct={deleteProduct}/>
        )
      })}
      
    </Container>
  )
}

export default AdminProductsScreen