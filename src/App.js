import React, { useState } from 'react'
import Axios from 'axios'
import "./App.css"

const KEY = '86fc3416aa4703bcbf2deec7eeb6759b';

const App = () => {
  
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await Axios.get('https://api.openweathermap.org/data/2.5/weather?q={city}&appid={KEY}');
      setData(response.data);
    }
    catch(err) {
      alert('Please enter the city name');
    }
    
  }
  return (
    <div className='App'><h1 className='title'>Weather App</h1>
    <div className='input-container'>
      <input
      type="text"
      className='input'
      value={city}
      onChange={e => setCity(e.target.value)}
      placeholder='Enter the ciyt name'
      />
    
    <button onClick={fetchData}>Fetch</button>

    </div>

    <div>
      {data && (
        <div className='container'>
          <h1 className='city-name'>{data.name}, {data.sys.country}</h1>
          <div className='weather-info'>
            <div className='temp'> {Math.round(data.main.temp)} C</div>
            <div className='coordinated'>
              <div> Lat - {data.coord.lat} </div>
              <div> Lon - {data.coord.lon} </div>
              </div>
          </div>
          </div>
      )}
    </div>
    
    
    </div>
   

    
  )
}

export default App