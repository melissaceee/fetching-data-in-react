// src/App.jsx
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';
import { useState } from 'react';





const App = () => {
  const [weather, setWeather] = useState({});
  const fetchData = async(city) => {
    // Get the weather data
    const data = await weatherService.show(city);
  

    // Create a new weather object using our weather data
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text
    };

    
    // Update the weather state
    setWeather(newWeatherState);
  }


  return (
    <main>
    <h1>Weather API!</h1>
    <WeatherSearch fetchData={fetchData}/>
    <WeatherDetails weather={weather} />
    </main>
  );
}

export default App