import React, { useState } from 'react'

function Fifteen({items,itemsPerPage}) {
    const [currentPage,setCurrentPage]=useState(1);

    const indexofLastItem=currentPage*itemsPerPage;
    const indexofFirstItem=indexofLastItem-itemsPerPage;
    const currentItem=items.slice(indexofFirstItem,indexofLastItem);

    const pageNumber=[];
    for(let i=1;i<=Math.ceil(items.length/itemsPerPage);i++){
        pageNumber.push(i);
    }
  return (
    <div>
        <ul>
        {
        currentItem.map((item,index)=>{
           return <li key ={index}>{item}</li>
        })
      }
        </ul>
      {pageNumber.map((number)=>(
        <li key={number} onClick={()=> setCurrentPage(number)}>{number}</li>
      ))}
    </div>
  )
}

export default Fifteen
