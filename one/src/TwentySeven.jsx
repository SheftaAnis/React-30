import React, { useState } from 'react'

function TwentySeven() {

    const[state,setState]=useState({
        count:0,
        text:'hello world',
        isActive:true
    });
   
    function incrementCount(){
         setState({...state,count:state.count+1})
    }

    function changeText(){
        setState({...state,text:'updated Text'})
    }

    function toggleActive(){
        setState({...state,isActive:!state.isActive})
    }
  return (
    <div>
    <h1>Multiple State example</h1>
    <p>Count:{state.count}</p>
    <p>text:{state.text}</p>
    <p>active:{state.isActive ? 'yes' : 'no'}</p>

    <button onClick={incrementCount}>Increment</button>
    <button onClick={changeText}>Change text</button>
    <button onClick={toggleActive}>Toggle active</button>
    </div>
  )
}

export default TwentySeven
