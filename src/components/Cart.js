import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import CartContext from '../context/cart/CartContext'
import CartItem from './CartItem'


const Cart = () => {
    const {cartItem, showCart, showHideCart} = useContext(CartContext)

  return (
    <div className='absolute'>
        {showCart && (
            <div>
                <div>
                    <BsCart4 onClick={showHideCart}/>
                </div>
                <div>
                    {cartItem.length=== 0 ? (<h4>Cart is empty</h4>):(
                        <ul>
                            {cartItem.map((item)=>(
                                <CartItem key={item.id} item={item}/>
                            ))}
                        </ul>
                    )}
                </div>
                <div>
                    <div>
                        cart total
                    </div>
                    <div></div>
                    <div>
                        {cartItem.reduce((amount, item) => item.price + amount, 0)}
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Cart