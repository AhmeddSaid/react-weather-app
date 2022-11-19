import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";

const App = () => {
  const [temp, setTemp] = useState("");
  const [feels, setFeels] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [error, setError] = useState(false);
  const [fetchData, setFetchData] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();
    // console.log("Weather");

    // API_KEY
    const API_KEY = "54f6d8e2a8216326196ac8f1641bea7a";

    // input values
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // fetch data
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    const data = await api.json();

    // console.log(data);

    if (city && country) {
      // set data to state
      setTemp(data.main.temp);
      setFeels(data.main.feels_like);
      setTempMin(data.main.temp_min);
      setTempMax(data.main.temp_max);
      setPressure(data.main.pressure);
      setHumidity(data.main.humidity);
      setWindSpeed(data.wind.speed);
      setSunrise(data.sys.sunrise);
      setSunset(data.sys.sunset);
      setFetchData(true);
    } else {
      setTemp("");
      setFeels("");
      setTempMin("");
      setTempMax("");
      setPressure("");
      setHumidity("");
      setWindSpeed("");
      setSunrise("");
      setSunset("");
      setError(true);
    }
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">Weather App</h1>
      </div>
      <div className="body-container">
        <Form getWeather={getWeather} />
        <Weather
          temp={temp}
          feels={feels}
          tempMin={tempMin}
          tempMax={tempMax}
          pressure={pressure}
          humidity={humidity}
          windSpeed={windSpeed}
          sunrise={sunrise}
          sunset={sunset}
          error={error}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default App;
