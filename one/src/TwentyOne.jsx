import React, { useReducer, useState } from 'react'

const taskReducer=(state,action)=>{
      switch(action.type){
        case 'ADD_TASK' :
            return [...state,{id:Date.now(),text:action.payload,completed:false}]
        case 'Remove' :
            return state.filter((task)=>task.id!==action.payload);  
        case 'TOGGLE_TASK' :
            return state.map((task)=> task.id===action.payload ? {...task,completed: !task.completed} : task )    
        default :
             return state;    
      }
}

function TwentyOne() {

    const[tasks,dispatch]=useReducer(taskReducer,[]);

    const[taskText,setTaskTest]=useState('');

    const addtask=()=>{
        dispatch({type:'ADD_TASK',payload:taskText})
    }
  return (
    <div>
      <h2>todo list</h2>
      <input type='text' value={taskText} onChange={(e)=> setTaskTest(e.target.value)} placeholder='add task'/>
      <button onClick={addtask}>add</button>
      <ul>{
         tasks.map((task)=>(
            <li key={task.id}><span style={{textDecoration:task.completed ?'line-through' : 'none'}} 
            onClick={()=>dispatch({type:'TOGGLE_TASK',payload:task.id})}
            >{task.text}</span>
            <button  onClick={()=> dispatch({type:'Remove',payload:task.id})}>remove</button>
            </li>
         ))
        }
       
      </ul>
    </div>
  )
}

export default TwentyOne
