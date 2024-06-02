import React from 'react'
import { useTheme } from './Themecontext'
import './Styles/Eighteen.css'

function Eighteencomp() {
    const {isdarkmode}=useTheme();
    const themeclass=isdarkmode ? 'dark-theme' : 'light-theme';
  return (
    <div className={`container ${themeclass}`}>
      <p>selected theme</p>
    </div>
  )
}

export default Eighteencomp
