import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />}/>
      </Routes>      
    </Router>
  );
}

export default App;
