import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Weather from './Weather'

const App = () => {
  const location = useLocation()
  console.log(location)
  const city = location.pathname.substring(1)

  return (
    <>
      <div className={city}>
        <Navbar />

        <Routes>
          <Route path={`/:cityName`} element={<Weather />} />
        </Routes>
      </div>
    </>
  )
}

export default App
