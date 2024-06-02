import React, { useState } from 'react'

function Five() {
    const [istoggle,setisToggle]=useState(false)

    const handle=()=>{
        setisToggle(
            !istoggle
        )
    }
  return (
    <div>
      <input type='checkbox' onChange={handle}></input>
      <p>{istoggle?"on":"off"}</p>
    </div>
  )
}

export default Five
