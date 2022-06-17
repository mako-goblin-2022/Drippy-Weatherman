import React from 'react'
import { useParams } from 'react-router-dom'
import WeatherForecast from '../../data/weathers'

const Weather = () => {
  const { cityName } = useParams()

  return (
    <>
      <img src="./images/mountains" alt="" />
      <div className="container ">
        <h1>{cityName}</h1>
        <div className="">
          {WeatherForecast[cityName].map((weather, index) => {
            return (
              <div className="display" key={index}>
                <h2>{weather.day}</h2>
                <h5>{weather.temperature}℃</h5>
                <h5>{weather.description}</h5>
                <h1>{weather.emoji}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Weather
