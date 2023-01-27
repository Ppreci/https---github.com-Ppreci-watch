
import './ProductCard.css';
import { Products } from '../Data';
import { Link } from 'react-router-dom';
import CartContext from '../context/cart/CartContext';
import { useContext } from 'react';


const ProductCard = () => {
  const {addToCart} = useContext(CartContext)


  
  return (
    <div>
        <h1 className='text-center text-4xl uppercase mb-4'>Products</h1>
    <div className='grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-10'>
        {Products.map(product=>(
            <div className='border h-[300px] md:w-[260px] w-[65%] flex flex-col ' key={product.id}>
              <div>
            <img src={product.productImg} alt="" className='bg-cover  md:w-[250px] w-[90%] h-[180px] m-auto mt-1'/>
            <div className="px-3">
            <h2 className='font-bold'>{product.title}</h2>
            <p className='text-blue-500'>{product.price}</p>
            <h3 className='flex text-yellow-500'>{product.rating}</h3>
           <Link className='flex justify-end'><button onClick={()=>addToCart(product)} className='text-white bg-black h-8 w-24 rounded-xl '>Add to cart</button></Link>
           </div> 
            </div>
            </div>
        ))}
        
    </div>
    </div>
  )
}

export default ProductCard