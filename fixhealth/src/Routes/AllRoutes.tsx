import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Blogs from '../Pages/Blogs'
import About from '../Pages/About'
import Services from '../Pages/Services'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs' element={<Home/>}/>
            <Route path='/about' element={<Home/>}/>
            <Route path='/services' element={<Home/>}/>
        </Routes>
    </div>
  )
}
