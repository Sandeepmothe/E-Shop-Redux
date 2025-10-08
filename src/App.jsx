import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App
