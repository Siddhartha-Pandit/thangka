import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Product from './components/Product'
import Story from './components/Story'
import CulturalExchange  from './components/CulturalExchange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero/>
     <Navbar/>
     <Categories/>
     <Product/>
     <Story/>
     <CulturalExchange/>
    </>
  )
}

export default App
