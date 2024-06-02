import React from 'react'
import { useLocalisation } from './LocalisationContext'

function TwentyFive() {

  const {setLocal,local,translate}=useLocalisation();

  const handleLocalChange=(newLocal)=>{
    setLocal(newLocal)
  }
  return (
    <div>
      <h1>{translate('greeting')}</h1>
      <h1>{translate('welcome')}</h1>
      <button onClick={()=>handleLocalChange('en')}>english</button>
      <button onClick={()=>handleLocalChange('es')}>espanol</button>
    </div>
  )
}

export default TwentyFive
