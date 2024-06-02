import React from 'react'

function Four() {
    const items=['item1','item2']
  return (
    <div>
      <ul>
        {items.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Four
