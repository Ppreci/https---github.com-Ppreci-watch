import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

const CartItem = ({item}) => {
    
    const {removeItem} = useContext(CartContext)

    return (
    <div>
        <img src={item.productImg} alt="" />
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <button onClick={()=>removeItem(item.id)}>Delete item</button>
    </div>
  )
}

export default CartItem