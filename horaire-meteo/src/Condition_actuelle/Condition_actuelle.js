

import React, { useState, useEffect } from 'react';
import './Condition_actuelle.css';

export function Condition_actuelle() {
  const apiUrl = "http://api.weatherapi.com/v1/current.json?key=ae8288f2cf3848bf843152432230508&q=Sherbrooke&aqi=no&lang=fr";

  const [temp, setTemp] = useState('Loading...');
  const [icon, setIcon] = useState('./day/not-available.svg')
  const [humidity, setHumidity] = useState("0");
  const [wind, setWind] = useState("0");
  const [precipitation, setPrecipitation] = useState("0");
  const [condition, setCondition] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setTemp(data.current.temp_c + "°C");
        setIcon(icon_URLtoPath(data.current.condition.icon));
        setHumidity(data.current.humidity);
        setWind(data.current.wind_kph);
        setPrecipitation(data.current.precip_mm);
        setCondition(data.current.condition.text);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setTemp('Failed to fetch data');
      });
  }, []); 

  return (
    // <div>
    //   <p>Temperature actuelle</p>
    //   
    // </div>
    <div className="div-condition-actuelle">
      <h3>Conditions actuelles</h3>
      <div className="div-temp">
        <p>{temp}</p>
        <img className='temp-icon' src={icon} alt='weather_icon'/>
      </div>
      <p>{condition}</p>
      <p><b>Precipitation</b> {precipitation} mm</p>
      <p><b>Humidite</b> {humidity}%</p>
      <p><b>Vent</b> {wind} km/h</p>
    </div>
    
  );
}

function icon_URLtoPath(URL){
  // console.log(URL);
  const parts = URL.split('/');
  // console.log(parts[parts.length -1]);
  const iconId = parts[parts.length -1].split('.');
  // console.log(iconId[0]);
  return "./day/"+ iconId[0] +".svg";
}
export default Condition_actuelle;
