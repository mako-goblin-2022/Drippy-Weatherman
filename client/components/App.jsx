import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Weather from './Weather'

const App = () => {
  return (
    <>
      <Navbar />
      <Weather /> 
      <h1>App display here</h1>
    </>
  )
}

export default App
