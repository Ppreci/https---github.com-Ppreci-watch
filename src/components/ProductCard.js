
import './ProductCard.css'
import { Products } from '../Data'
import { Link } from 'react-router-dom'


const ProductCard = () => {
  return (
    <div className='products'>
        <h1>Products</h1>
    <div className='product-container'>
        {Products.map(product=>(
            <div className='productCard'>
            <img src={product.productImg} alt="" />
            <div className="des">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <h3 className='rating'>{product.rating}</h3>
           <Link><button className='addToCart'>Add to cart</button></Link> 
            </div>
            </div>
        ))}
        
    </div>
    </div>
  )
}

export default ProductCard