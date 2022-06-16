import React from 'react'
import { useParams } from 'react-router-dom'
import WeatherForecast from '../../data/weathers'

const Weather = () => {
  const { cityName } = useParams()

  return (
    <>
      <div>{cityName}</div>

      {WeatherForecast[cityName].map((weather, index) => {
        return (
          <div  key={index}>
            <p>{weather.day}</p>
            <p>{weather.temperature}</p>
            <p>{weather.description}</p>
            <p>{weather.emoji}</p>
          </div>
        )
      })}
    </>
  )
}

export default Weather
