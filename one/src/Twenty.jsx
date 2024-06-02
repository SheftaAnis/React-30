import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case 'increment' :
            return {count:state.count+1 }
        case 'decrement' :
            return {count:state.count-1 }    
        case 'reset' :
            return {count:0 }
    }
}

function Twenty() {

    const [state,dispatch]=useReducer(reducer,{count:0});
  return (
    <div>
        <p>count:{state.count}</p>
      <button onClick={()=> dispatch({type:'increment'})}>+</button>
      <button onClick={()=> dispatch({type:'decrement'})}>-</button>
      <button onClick={()=> dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default Twenty