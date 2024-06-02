import React, { useState } from 'react'

function Sixteen() {
    const [color,setColor]=useState('#000000');

  return (
    <div>
      <input type='color' onChange={(e)=> setColor(e.target.value)}/>    
      <div style={{
        width:'200px',
        height:'200px',
        backgroundColor:color
      }}></div>
    </div>
  )
}

export default Sixteen
