import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Product from './Pages/Product';
import Home from './Pages/Home';
import ShopCat from './Pages/ShopCat';
import Store from './Pages/Store.jsx';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sunglasses" element={<ShopCat category="sunglasses" />} />
        <Route path="/men" element={<ShopCat category="men" />} />
        <Route path="/women" element={<ShopCat category="women" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/store" element={<Store />} />
        <Route path="/Pages/Store.jsx" element={<Navigate to="/store" replace />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
