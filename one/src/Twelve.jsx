import React, { useState } from 'react'

function Twelve() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[isregistered,setIsregistered]=useState(false)
    const [islogin,setIslogin]=useState(false)
    const [users,setUsers]=useState([])
    const handle=()=>{
        if(isregistered){
          if(isregistered){
            const user=user.find((u)=>u.email===email && u.password===password);//available user ka email password match karenge
            if(user){setIslogin(true);//agar hai to true
            }else{
                alert('login failed');
            }
          }
        }else{
            const newuser={email,password}
            setUsers([...users,newuser]);//purane user rhenge hi baki aur naye aajaynge
            localStorage.setItem('users',JSON.stringify([...users,newuser]));
            setIslogin(true);
        }
    }

    const handleLogout=()=>{
           setIslogin(false);
           setEmail('');
           setPassword('');
    }
  return (
    <div>
        {
            islogin ? (
            <div>
            <h2>welcome {email}</h2>
            <button onClick={handleLogout}>logout</button>
            </div> ) : (
         <div>
            <h2>{isregistered ? 'login' : 'register'}</h2>
            <form>
         <input type='email' placeholder='email' onChange={(e)=> setEmail(e.target.value)}/>
         <input type='password' placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
         <button onClick={handle}>{isregistered? 'login' : 'register'}</button>
       </form>
         <p>{isregistered ? "don't have an account,register": "you have an account,please login"}</p>
         <button onClick={()=> setIsregistered(!isregistered)}>{isregistered ? 'register' : 'login' }</button>
       
         </div>
            )
        }
        
       </div>

    )
}
     

export default Twelve
