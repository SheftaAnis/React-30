import React,{useState} from 'react'

function Fourteen({items}) {
     const[searchterm,setSearchterm]=useState('');

     const filtered=items.filter((item)=>
        item.toLowerCase().includes(searchterm.toLowerCase())
     )
  return (
    <div>
      <input type='text' placeholder='search' onChange={(e)=> setSearchterm(e.target.value)}/>
      <ul>
        {filtered.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

  )
}

export default Fourteen
