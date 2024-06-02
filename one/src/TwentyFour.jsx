import React, { useReducer, useState } from 'react'

function boxReducer(state,action){
    switch(action.type){
        case 'MOVE':
           return{
            ...state,
            left:action.payload.left,
            top:action.payload.top
           } ;
         default:
          return state;  
    }
}
function TwentyFour() {

    const[boxstate,dispatch]=useReducer(boxReducer,{left:0,top:0});
    const[isDraging,setisDraging]=useState(false);
    const[initialX,setinitialX]=useState(0);
    const[initialY,setinitialY]=useState(0);

    const handleMouseDown=(e)=>{
         setisDraging(true)
         setinitialX(e.clientX-boxstate.left);
         setinitialY(e.clientY-boxstate.top);
    }
    const handleMouseUp=(e)=>{
         setisDraging(false)
    }
    const handleMouseMove=(e)=>{
        if(isDraging){
            const left=e.clientX-initialX;
            const top=e.clientY-initialY;
            dispatch({type:'MOVE',payload:{left,top}})
        }
    }
  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{left:boxstate.left,top:boxstate.top}}
    >Drag Me</div>
  )
}

export default TwentyFour
