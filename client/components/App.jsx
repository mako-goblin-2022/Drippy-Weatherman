import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Weather from './Weather'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={`/:cityName`} element={<Weather />} />
      </Routes>
    </>
  )
}

export default App
