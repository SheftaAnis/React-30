import React, { useState } from 'react'
import './Weather.css'
const api={
    key:"0b7875f023a16f6de094d67abe5e2ed6",
    base:"https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
    const[query,setQuery]=useState('')
    const[weather,setWeather]=useState({});
    const search=(evt)=>{
        if(evt.key==="Enter"){
            fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
            .then(res=>res.json())
            .then(result=>{
                setWeather(result);
                setQuery('');
                console.log(result);
            })
        }
    }

    const dateBuilder=(d)=>{
        let months=["january","febryary","march","april","may","june","july","august","september","october","november","december"];
        let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

        let day=days[d.getDay()];
        let date=d.getDate();
        let month=months[d.getMonth()];
        let year=d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
  return (
    <div className={(typeof weather.main!="undefined") ? ((weather.main.temp >16) ? 'app warm' : 'app'): 'app'}>
      <main>
        <div className='search-box'>
            <input type='text'
             className='search-bar' 
             placeholder='Search...' 
             onChange={(e)=>setQuery(e.target.value)}
             value={query}
             onKeyPress={search}/> 
        </div>
        {(typeof weather.main!="undefined") ? (
            <div>
           
            <div className='location-box'>
                <div className='location'>
                    {weather.name},{weather.sys.country}
                    <div className='date'>
                        {dateBuilder(new Date())}
                    </div>
                    <div className='weather-box'>
                       <div className='temp'>
                           {Math.round(weather.main.temp)} degree C
                       </div>
                       <div className='weather'>
                          {weather.weather[0].main}
                       </div>
                    </div>
                </div>
            </div>
            </div>
        ) : ('')}  
      </main>
    </div>
  )
}

export default Weather
