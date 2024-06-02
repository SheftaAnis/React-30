import React,{useState} from 'react'

function Eight() {
    const[backgroundColor,setBgcolor]=useState('yellow');

    const handle=()=>{
        const color=backgroundColor==='yellow' ?'blue' : 'pink';
        setBgcolor(color)
    }
  return (
    <div onClick={handle} 
    style={{
        backgroundColor,
        height:'200px',
        width:'200px',
        cursor:'pointer'
    }}>
      click me
    </div>
  )
}

export default Eight
