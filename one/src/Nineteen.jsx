import React from 'react'
import { useCart } from './CartContext'

function Nineteen() {

    const {cartState,cartDispatch}=useCart();
    const products=[
        {id:1,name:'product A'},
        {id:2,name:'product B'},
        {id:3,name:'product C'}
    ]
    const addtocart=(item)=>{
        cartDispatch({ type: 'ADD_TO_CART', payload: {...item,quantity:1} });
    }
  return (
    <div>
      <h2>shopping cart</h2>
      <h2>product list</h2>
      <ul>{
      products.map((product)=>(
        <li key={product.id}>{product.name} <button onClick={()=> addtocart(product)}>add to cart</button>
        </li>
    ))}
      </ul>
      
    </div>
  )
}

export default Nineteen
