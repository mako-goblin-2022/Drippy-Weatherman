import React from 'react'
import { Link } from 'react-router-dom'
import WeatherForecast from '../../data/weathers'

const Navbar = () => {
  const cityNames = Object.keys(WeatherForecast)

  return (
    <div>
      <nav className="navbar navbar-light">
        {cityNames.map((city, index) => {
          return (
            <div
              className=" nav navbar-nav navbar-center container-fluid navbar-header navbar-brand mb-0 h1"
              key={index}
            >
              <Link className="navTest" to={`/${city}`}>
                {city}
              </Link>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default Navbar
