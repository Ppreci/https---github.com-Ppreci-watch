import {ADD_TO_CART, REMOVE_ITEM, SHOW_HIDE_CART} from '../Types'

const CartReducer = (state, action) =>{
    switch (action.type){
        case SHOW_HIDE_CART:{
            return{
                ...state,
                showCart: !state.showCart
            }}
        case ADD_TO_CART:{
                return{
                    ...state,
                    cartItem: [...state.cartItem, action.payload]
                }}
        case REMOVE_ITEM: {
            return{
                ...state,
                cartItem: state.cartItem.filter(item=> item.id !== action.payload)
            }
            }
            default:
        return state
    
            }
        }
        
        
        


export default CartReducer