import React from 'react'

function Weather() {
    const [city, setCity] = React.useState();
    const [weather , setWeather] = React.useState();
    const handleCityChange = (event) => {
        setCity(event.target.value);
    }
    const handleClick = () => {
        const fetchWeather = async (city) => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14cbe91d2167f85efaaf01c672052309`);
                const data = await response.json();
                setWeather(data);
            }
            catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
        fetchWeather(city);
    }
  return (
    <div className = "Weather-container">
      <input type="text" placeholder="Enter City Name" value={city} onChange={handleCityChange}/>
      <button onClick={handleClick}>Get Weather</button>
      {weather && <>
      <div className = "weather-info">
        <h3>{weather.name}</h3>
        <p>Temperature : {weather.main.temp}°K</p>
        <p>Weather : {weather.weather[0].description}</p>
      </div>
      </>}
    </div>
  )
}

export default Weather;