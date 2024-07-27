import './App.css';
import React, { useState } from 'react';
// import weathercard from './Component/card';
import axios from 'axios';
import mainimg from './mainimg.png'

function App() {
  const [weatherdata, setweatherdata] = useState(null);

  const place = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("input").value}&appid=6e5f54239514c13f7c50d4fb605767fe`;
    document.getElementById("input").value = "";

    try {
      const response = await axios.get(url);
      setweatherdata(response.data);
    } catch (error) {
      alert("Error! Invalid city name");
    }
  };

  return (
    <div className="d-flex justify-content-center con">
      <div className="card" style={{ width: "21rem", height: "25rem" }}>
        <h2 className="ch2">Weather App</h2>
        <hr className="chr" />

        <nav className="navbar">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Enter city name" aria-label="Search" id="input" />
            <button className="btn btn1 btn-outline-success mr-sm-2" type="button" onClick={place}>Search</button>
          </form>
        </nav>

        {(weatherdata && (<div>
          <h3 id="ch3">{weatherdata.name}</h3>
          <img className="card-img-top cimg" src={`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-text">{((weatherdata.main.temp) - 273.15).toFixed(2)}°C</h3>
            <p className="card-text1">{weatherdata.weather[0].description}</p>
            <p className="card-text2">Wind speed:{weatherdata.wind.speed}</p>
          </div>
        </div>)) || <img className="d-flex align-self-center mimg" src={mainimg} />}
      </div>
    </div>
  );
}

export default App;

// https://openweathermap.org/img/wn/11d@2x.png
// https://api.openweathermap.org/data/2.5/weather?q=bharatpur&appid=6e5f54239514c13f7c50d4fb605767fe