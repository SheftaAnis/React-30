import React,{useState} from 'react'

function Three() {
    const[input,setInput]=useState('')
  return (
    <div>
      <input type='text' onChange={(e)=> setInput(e.target.value)}></input>
      <p>user input:{input}</p>
    </div>
  )
}

export default Three