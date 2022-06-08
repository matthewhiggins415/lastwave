import { useState } from 'react'
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

function App() {
  const [user, setUser] = useState(null)

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
      <Navbar />
      <ToastContainer theme="light" position="top-right" autoClose={1500}/>
      <Routes>
        <Route path="/" element={<Homescreen />}/>
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/login" element={<LoginScreen notify={notify} setUser={setUser}/>} />
        <Route path="/register" element={<RegisterScreen notify={notify} setUser={setUser}/>} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>      
    </Router>
    </>
  );
}

export default App;
