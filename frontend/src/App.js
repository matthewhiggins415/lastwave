import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen';
import ProductsScreen from './screens/ProductsScreen'
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import CartScreen from './screens/CartScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />}/>
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>      
    </Router>
  );
}

export default App;
