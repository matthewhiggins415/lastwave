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
import Footer from './components/Footer'
import SignOut from './components/SignOut';

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
      <Navbar user={user} />
      <ToastContainer theme="light" position="top-right" autoClose={1500}/>
      <Routes>
        <Route path="/" element={<Homescreen />} exact/>
        <Route path="/products" element={<ProductsScreen user={user} notify={notify}/>} exact/>
        <Route path="/product/:id" element={<ProductScreen user={user} notify={notify} />} exact/>
        <Route path="/login" element={<LoginScreen notify={notify} setUser={setUser}/>} exact/>
        <Route path="/register" element={<RegisterScreen notify={notify} setUser={setUser}/>} exact/>
        <Route path="/about" element={<AboutScreen />} exact/>
        <Route path="/cart" element={<CartScreen user={user} notify={notify}/>} exact/>
        <Route path="/contact" element={<ContactScreen />} exact/>        
        <Route path="/sign-out" element={<SignOut clearUser={clearUser} user={user} notify={notify}/>} exact/>
      </Routes>   
      <Footer />   
    </Router>
    </>
  );
}

export default App;
