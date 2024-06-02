import React, {useState,useEffect} from 'react'

function Seven() {
    const[time,setTime]=useState(5)
    useEffect(()=>{
        if(time>0){
            const timer=setTimeout(()=> setTime(time-1),1000);
            return ()=>clearTimeout(timer);
        }
    },[time])
  return (
    <div>
      <p>{time}</p>
    </div>
  )
}

export default Seven
