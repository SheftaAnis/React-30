import React, { useState } from 'react'

function Eleven() {
    const[file,setFile]=useState(null)
    const handle=(e)=>{
        const selected=e.target.files[0];
        setFile(selected)
    }
  return (
    <div>
      <input type='file' accept='image/*' onClick={handle}/>
      {file && <img src={URL.createObjectURL(file)} alt='uploaded'/>}
    </div>
  )
}

export default Eleven
