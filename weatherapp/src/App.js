import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async() => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a94a86e0e3f1413e1bf87c2adf765015`);
      setWeatherData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Error fetching the data.");
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      {weatherData ? (
        <div classname="">
          <li>Pressure: {weatherData.main.pressure} atm</li>
          <li>Temperature: {weatherData.main.temp} &deg;K</li>
        </div>
      ): (
        <p>Loading Data</p>
      )}
    </div>
  )
}

export default App;
