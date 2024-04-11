import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png'; 
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png'

const WeatherApp = () => {

  let api_key = '6f4e9a209e873afba9f34037f1ad9f44';

  const search = () => {
    const element = document.getElementsByClassName('cityInput')
    if(element[0].value==='') {
      return 0;
    }

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=Imperial&appid=6f4e9a209e873afba9f34037f1ad9f44';
  }

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='search'/>
        <div className='search-icon' onClick={()=>{search()}}>
          <img src={search_icon}/>
        </div>
      </div>
      <div className='weather-image'>
        <img src={cloud_icon}/>
      </div>
      <div className='weather-temp'>24°</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} className='icon'/>
          <div className='data'>
            <div className='humidity-percent'>64%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} className='icon'/>
          <div className='data'>
            <div className='humidity-percent'>18 km/h</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
