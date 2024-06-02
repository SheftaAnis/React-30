import React,{useState} from 'react'

function Two() {
  const [count,setCount]=useState(0);
  const add=()=>{
    if(count<10){
      setCount(count+1);
    }
    
  }
  return (
    <div>
     
      <button onClick={add}>+</button>
      <span>{count}</span>
      <button  onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}

export default Two
