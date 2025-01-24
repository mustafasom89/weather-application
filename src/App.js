import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weatherInformation, setWeatherInformation] = useState(null);

  //I created the key from [https://www.weatherapi.com/] 
  const Key = '996f0254699e4bc9a09120832241504';

  const fetchWeatherInformation = async () => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${Key}&q=${city}&aqi=no`
      );
      setWeatherInformation(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <h1>Weather App</h1>
      <p>Enter City Name:</p>
      <input
          id="weather"
          required
          type="text"
          value={city}
          placeholder="city name"
          onChange={(e)=>setCity(e.target.value)}
          />

        <button type="submit" onClick={fetchWeatherInformation}>Get Weather</button>
      {weatherInformation && (
        <div>
          <h1>Resul</h1>
          <h2>City of {weatherInformation.location.name}</h2>
          <p>Temp: {weatherInformation.current.temp_c}°C</p>
          <p>Condition: {weatherInformation.current.condition.text}</p>
          <img
            src={`https:${weatherInformation.current.condition.icon}`}
            alt={weatherInformation.current.condition.text}
          />
        </div>
      )}
    </div>
  );
}

export default App;
