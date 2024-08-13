import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Cart from './Cart'; 
import Product from './Product'; 
import Home from './Home'; 
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
