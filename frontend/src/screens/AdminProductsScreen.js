import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { retrieveProducts } from '../api/admin/products'
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

  const handleClick = () => {
    console.log('clicked')
    navigate("/admin/add-product")
  }

  return (
    <Container>
      <AdminProductScreenHeader>
        <H1>Admin Products</H1>
        <Button onClick={handleClick}>Add Product</Button>
      </AdminProductScreenHeader>
      {products.map((item, index) => {
        return (
          <AdminProduct item={item} index={index}/>
        )
      })}
      
    </Container>
  )
}

export default AdminProductsScreen