import React from 'react'

function Ten() {
    let quotes=['sahsbshsss','thhjnjnskmsklamslk','sayahjknnbcycuxnx']

    const random=Math.floor(Math.random()*quotes.length);
    const quote=quotes[random]
  return (
    <div>
      {quote}
    </div>
  )
}

export default Ten
