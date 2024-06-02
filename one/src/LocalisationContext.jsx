import { createContext, useContext, useState } from "react";

const LocalisationContext=createContext();

export const useLocalisation=()=>{
      return  useContext(LocalisationContext)
}

export function LocalisationProvider({children}){

    const [local,setLocal]=useState('en');

    const localisedString={
        en:{
            greeting:'hello',
            welcome:'welcome to my app'
        },
        es:{
            greeting:'hola mundo',
            welcome:'dewkkdkferfer,.fr'
        }
    };

    const translate=(key)=>{
        return localisedString[local][key]
    }

    return(
        <LocalisationContext.Provider value={{setLocal,local,translate}}>
            {children}
        </LocalisationContext.Provider>
    )
}