import React,{useEffect,useState} from 'react'

function Six() {
  const [data,setData]=useState(null)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((response)=>response.json()).then((value)=>setData(value))
  },[])
  return (
    <div>
        {
      data?(
        <div>
        <h1>{data.ans}</h1>
        </div>
           
      ) : (
        <p>loading..</p>
      )
    }

    </div>
  )
}

export default Six
