import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen';
import ProductsScreen from './screens/ProductsScreen'
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import CartScreen from './screens/CartScreen';
import AboutScreen from './screens/AboutScreen';
import RegisterScreen from './screens/RegisterScreen'
import Footer from './components/Footer'
import SignOut from './components/SignOut';
import ProfileScreen from './screens/ProfileScreen'
import CheckoutScreen from './screens/CheckoutScreen';
import PaymentCompleteScreen from './screens/PaymentCompleteScreen'
import ShippingConfirmationScreen from './screens/ShippingConfirmationScreen'
import OrderItemScreen from './screens/OrderItemScreen'
import PageNotFoundScreen from './screens/PageNotFoundScreen'

//Admin Screens
import AdminCustomersScreen from './screens/AdminCustomersScreen'
import AdminOrdersScreen from './screens/AdminOrdersScreen'
import AdminProductsScreen from './screens/AdminProductsScreen'
import AdminProductEdit from './screens/AdminProductEdit'
import AdminCustomerEditScreen from './screens/AdminCustomerEditScreen'


const App = () => {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    // console.log("stripe:", stripe)
  }, [])

  const clearUser = () => setUser(null)

  const notify = (message, type) => {
    if (type === "warning") {
      toast.warn(`${message}`)
    } else if (type === 'danger') {
      toast.error(`${message}`)
    } else {
      toast.success(`${message}`)};
    }
  
  return (
    <>
    <Router>
      <Navbar user={user} />
      <ToastContainer theme="light" position="top-right" autoClose={1500}/>
      <Routes>
        <Route path="*" element={<PageNotFoundScreen />} />
        <Route path="/" element={<ProductsScreen user={user} notify={notify}  setUser={setUser}/>} exact/>
        <Route path="/products" element={<ProductsScreen user={user} notify={notify}  setUser={setUser}/>} exact/>
        <Route path="/product/:id" element={<ProductScreen user={user} notify={notify} setUser={setUser} />} exact/>
        <Route path="/login" element={<LoginScreen notify={notify} setUser={setUser}/>} exact/>
        <Route path="/register" element={<RegisterScreen notify={notify} setUser={setUser}/>} exact/>
        <Route path="/about" element={<AboutScreen />} exact/>
        <Route path="/cart" element={<CartScreen user={user} notify={notify} setUser={setUser}/>} exact/>
        <Route path="/contact" element={<ContactScreen />} exact/>        
        <Route path="/sign-out" element={<SignOut clearUser={clearUser} user={user} notify={notify}/>} exact/>
        <Route path="/profile" element={<ProfileScreen user={user} notify={notify} setUser={setUser}/>}  exact/>
        <Route path="/checkout" element={<CheckoutScreen user={user} notify={notify}/>} exact/>
        <Route path="/shipping" element={<ShippingConfirmationScreen user={user} notify={notify} setUser={setUser}/>} exact/>
        <Route path="/payment-complete" element={<PaymentCompleteScreen user={user} notify={notify}/>} exact/>
        <Route path="/order/:id" element={<OrderItemScreen user={user} notify={notify}/>} exact/>

        <Route path="/admin/customers" element={<AdminCustomersScreen user={user} notify={notify}/>} exact/>
        <Route path="/admin/customers/:id" element={<AdminCustomerEditScreen user={user}/>} exact/>
        <Route path="/admin/products" element={<AdminProductsScreen user={user} notify={notify}/>} exact/>
        <Route path="/admin/orders" element={<AdminOrdersScreen user={user} notify={notify}/>} exact/>
        <Route path="/admin/edit-product/:id" element={<AdminProductEdit user={user} notify={notify}/>} exact/>
      </Routes>   
      <Footer />   
    </Router>
    </>
  );
}

export default App;
