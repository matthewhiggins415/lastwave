import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { ToastContainer } from 'react-toastify'
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
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />}/>
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>      
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
