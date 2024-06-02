import React, { useEffect, useState } from 'react'

function Thirteen() {
    const [weather,setWeather]=useState(null)

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const latitude=position.coords.latitude;
                const longitude=position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9d341d5cff14646cce082aadd12afe18`)
                .then((response)=>(response.json()))
                .then((data)=> setWeather(data));
            })
        }
    })
  return (
    <div>
        {
            weather ? (
                <div>
                   <h2>current weather</h2>
                   <p>temperature:{weather.main.temp}</p>
                   <p>condition:{weather.weather[0].description}</p>
                   <p>Visibility:{weather.visibility}</p>
                </div>
            )
            :
            (
                <p>
                    Loading...
                </p>
            )
        }
      
    </div>
  )
}

export default Thirteen
