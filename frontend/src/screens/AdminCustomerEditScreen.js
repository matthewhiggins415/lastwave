import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getAUser } from '../../src/api/admin/customers'

const AdminCustomerEditScreen = ({ user }) => {
  let navigate = useNavigate()
  let { id } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getAUser(user, id)
      console.log("res", res)
    }

    fetchUser()
  }, [])

  console.log('user:', user)

  return (
    <div>
      customer edit screen
    </div>
  )
}

export default AdminCustomerEditScreen