import React, { useState,useEffect } from 'react'
import axios from 'axios';


function TwentySix() {

    const[data1,setData1]=useState([]);
    const[data2,setData2]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response=>{
            setData1(response.data)
        })
        .catch(error=>{
            console.error("error",error);
        });

        axios.get('https://jsonplaceholder.typicode.com/posts/2').then(response=>{
            setData2(response.data)
        })
        .catch(error=>{
            console.error("error",error);
        })
    },[])

    console.log(data1,data2);
  return (
    <div>
      
    </div>
  )
}

export default TwentySix
