import { Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/home'
import AllProducts from "./pages/ProductList";
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path='/products/:id' element={<ProductDetail/>}/>
      </Routes>
    </>
  )
}

export default App
