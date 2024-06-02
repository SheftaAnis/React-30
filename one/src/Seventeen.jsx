import React, { useState } from 'react'
import './Styles/Seventeen.css'
function Seventeen() {
  const[isopen,setIsopen]=useState(false);
  const toggle=()=>{
    setIsopen(!isopen);
  }
  return (
    <div>
    <button className='menu-icon' onClick={toggle}>=</button>
    <ul className={`menu ${isopen ? 'open' : ''}`}>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contacts</li>
    </ul>
    </div>
  )
}

export default Seventeen
