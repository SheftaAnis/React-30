import React from 'react'
import { useTheme } from './Themecontext'

function Eighteen() {
    const {isdarkmode,toggleTheme}=useTheme();
  return (
    <div>
      <input type='checkbox' checked={isdarkmode} onChange={toggleTheme}/>
      Drak Mode
    </div>
  )
}

export default Eighteen
