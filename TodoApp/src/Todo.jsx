import React ,{useState} from 'react'
import './Todo.css'
function Todo() {

    const[inputValue,setInputValue]=useState('');
    const[todos,setTodos]=useState([]);
    const[editMode,setEditMode]=useState(false);
    const[editId,setEditId]=useState(null);
    const[editValue,setEditValue]=useState('');
    const addTodo=()=>{
        
        if(inputValue.trim()!==''){
              const newTodo={
                id:new Date().getTime(),
                text:inputValue,
              }
              setTodos([...todos,newTodo]);
              setInputValue('');
        }
    }

    const deleteTodo=(id)=>{
        const updated=todos.filter((todo)=>todo.id !== id);
        setTodos(updated)
    }

    const enterEditMode=(id,text)=>{
         setEditMode(true);
         setEditId(id);
         setEditValue(text);
    }

    const updateTodo=()=>{
      const updatedTodos=todos.map((todo)=>{
           if(todo.id===editId){
            return {...todo,text:editValue}
           }
           return todo;
      });
      setTodos(updatedTodos);
      setEditMode(false);
      setEditId(null);
      setEditValue('');
    }
  return (
    <div className='Todo-Container'>
      <h2>Todo List</h2>
      <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      {
        editMode ? (
          <div>
            <input type='text' value={editValue} onChange={(e)=> setEditValue(e.target.value)}/>
            <button onClick={updateTodo}>Update</button>
          </div>
        )
        :
        (
          <button onClick={addTodo}>Add</button>
        )
      }
     
      <ul>
        {
            todos.map((todo)=>(
                <li key={todo.id}>{todo.text}
                <div>
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                <button onClick={()=>enterEditMode(todo.id,todo.text)}>Edit</button>
                </div>
                </li>
            )
        )}
      </ul>
    </div>
  )
}

export default Todo
