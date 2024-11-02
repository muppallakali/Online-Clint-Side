import React from 'react'
import "./App.css"
import LandingPage from "../src/dash/components/pages/LandingPage"
import {Routes,Route} from "react-router-dom"
import ProductMenu from './dash/components/ProductMenu'

export default function App() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/products/:firmId/:firmName' element={<ProductMenu/>}></Route>     
    </Routes>
    
  )
}
