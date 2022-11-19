import React from "react";
import "./Weather.css";

const Weather = (props) => {
  // time formatting for sun rise
  let unix_timestamp_sunrise = props.sunrise;
  let date_sunrise = new Date(unix_timestamp_sunrise * 1000);
  let hours_sunrise = date_sunrise.getHours();
  let minutes_sunrise = "0" + date_sunrise.getMinutes();

  let hours_sunrise_12 = hours_sunrise % 12 || 12;

  // time formatting for sun set
  let unix_timestamp_sunset = props.sunset;
  let date_sunset = new Date(unix_timestamp_sunset * 1000);
  let hours_sunset = date_sunset.getHours();
  let minutes_sunset = "0" + date_sunset.getMinutes();

  let hours_sunset_12 = hours_sunset % 12 || 12;

  // convert to 12h

  let formattedTime_sunrise = hours_sunrise_12 + ":" + minutes_sunrise.substr(-2) + " AM";
  let formattedTime_sunset = hours_sunset_12 + ":" + minutes_sunset.substr(-2) + " PM";

  return (
    <div>
      <div>
        <div className="weather">
          <div>
            Temperature: <span>{props.temp && (props.temp - 273.15).toFixed(2) + " °C"}</span>
          </div>
          <div>
            Feels Like: <span>{props.feels && (props.feels - 273.15).toFixed(2) + " °C"}</span>
          </div>
          <div>
            Temp. min: <span>{props.tempMin && (props.tempMin - 273.15).toFixed(2) + " °C"}</span>
          </div>
          <div>
            Temp. max: <span>{props.tempMax && (props.tempMax - 273.15).toFixed(2) + " °C"}</span>
          </div>
          <div>
            Pressure: <span>{props.pressure && props.pressure + " hPa"}</span>
          </div>
          <div>
            Humidity: <span>{props.humidity && props.humidity + "%"}</span>
          </div>
          <div>
            Wind Speed: <span>{props.windSpeed && Math.round(props.windSpeed * 1.609) + "Km/h"}</span>
          </div>
          <div>
            Sun Rise:
            <span>{props.sunrise && formattedTime_sunrise}</span>
          </div>
          <div>
            Sun Set: <span>{props.sunset && formattedTime_sunset}</span>
          </div>
        </div>
        {/* {props.error && <h2>City or Country Not Specified</h2>} */}
      </div>
    </div>
  );
};

export default Weather;
