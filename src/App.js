import React, { Fragment } from 'react'
import {Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'

function App() {
  return (
    <div className='App'>
      <HeaderComponent/>
      <Routes>
        <Route index element={<HomePage/>}/>
      </Routes>
      <Routes>
        <Route path='/Home'element={<HomePage/>}/>
        <Route path='/Shop'element={<ProductsPage/>}/>
        <Route path='/CreateYourOwn'element={<ProductsPage/>}/>
        <Route path='/About'element={<ProductsPage/>}/>
        <Route path='/Contact'element={<ProductsPage/>}/>
        <Route path='/SizeGuide'element={<ProductsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
