import React from 'react'
import { useAuth } from './AurhContext'

function TwentyThree() {

    const {user,login,logout}=useAuth();
  return (
    <div>
      <h1>User Authentication example</h1>
      <div> {user ? (
        <div>
                    <p>Welcome, {user.username}</p>
                    <button onClick={logout}>logout</button>

        </div>
                ) : (
                    <div>
                    <p>Please log in</p>
                    <button onClick={()=> login({username:'user123'})}>login</button>
                    </div>
                )}
        
      </div>
     
    </div>
  )
}

export default TwentyThree
