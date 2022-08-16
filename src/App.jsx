import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Route,Routes, useParams} from 'react-router-dom'
import Navbar from './Comonents/Navbar/navbar'

import Home from './Comonents/Home/Home.jsx'
import Footer from './Footer/Footer'
import Productdetails from './Productdetails/Productdetails'
import Products from './Comonents/Products/Products'
function App() {
  const params=useParams()
  console.log(params)
  const {category}=params
  return (
    <>
      <Navbar/>
    <Routes>
<Route  path='/' element={<Home/>} />
<Route  path={`/:${category}`} element={<Products  category={category}/>} />
<Route  path='mens/:id' element={<Productdetails/>} />


    </Routes>
<Footer/>
  
    </>
  )
}

export default App
