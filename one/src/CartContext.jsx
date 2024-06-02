import { createContext,useContext, useReducer } from "react";

const cartContext=createContext();

export function cartProvider({children}){

    const initialstate=()=>{
        cartItems:[];
    }

    function cartReducer(state,action){
        console.log(state,action);
        switch(action.type){
          
        }
    }


    const[cartState,cartDispatch]=useReducer(cartReducer,initialstate);

    return <cartContext.Provider value={{cartState ,cartDispatch}}>{children}</cartContext.Provider>
}

export function useCart(){
    return useContext(cartContext);
}