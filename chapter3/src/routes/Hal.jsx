import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Halaman1 } from '../pages/Halaman1'
import { Halaman2 } from '../pages/Halaman2'

export const Hal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Halaman1></Halaman1>}></Route>
        <Route path='/add' element={<Halaman2></Halaman2>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
