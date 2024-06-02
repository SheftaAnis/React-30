import { useContext, useState } from "react";
import { createContext } from "react";

const ThemeContext=createContext();

const ThemeProvider=({children}) =>{
    const [isdarkmode,setIsdarkmode]=useState(false);

    const toggleTheme=()=>{
        setIsdarkmode((prevmode)=>!prevmode)
    };

   return(
    <ThemeContext.Provider value={{isdarkmode,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
   );
};

const useTheme=()=>{
    return useContext(ThemeContext);
}

export {useTheme,ThemeProvider}