import React from 'react'
import { Link } from 'react-router-dom'
import WeatherForecast from '../../data/weathers'

const Navbar = () => {
  const cityNames = Object.keys(WeatherForecast)

  return (
    <div>
      <nav>
        {cityNames.map((city, index) => {
          return (
            <div key={index}>
              <Link to={`/${city}`}>{city}</Link>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default Navbar
