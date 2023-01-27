import React, { useContext } from 'react'
import {Links} from '../Data'
import { Link } from 'react-router-dom'
import {CgProfile}from 'react-icons/cg'
import {BsCart4}from 'react-icons/bs'
import {GiHamburgerMenu}from 'react-icons/gi'
import CartContext from '../context/cart/CartContext'



const Navbar = () => {
    const {cartItem, showHideCart} = useContext(CartContext)

  return (
    <div>
    <div className='flex justify-between  item-center p-[30px] w-full fixed md:px-[25px] py-[10px] bg-blue-500 z-20'>
        <div className='logo'>
            <Link to='/'><h1 className='text-3xl font-semibold cursor-pointer'>TIMES</h1></Link>
        </div>
        <div className='hidden md:block absolute md:static md:h-0 bg-blue-500 md:bg-transparent w-full md:w-auto'>
            <ul className='md:flex'>
                {Links.map(Linkk=>(
                    <li className=' pr-[20px]  '>
                        <Link to={Linkk.link}>{Linkk.name}</Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className='flex'>
            <BsCart4 size={30} className='mr-2 relative cursor-pointer' onClick={showHideCart}/>
            {cartItem.length == 0 ? <span className='bg-red-500 relative right-[20px] top-[-7px] rounded-full w-[23px] h-5 text-center text-sm cursor-pointer'>0</span> : (<span className='bg-red-500 relative right-[20px] top-[-7px] rounded-full w-[23px] h-5 text-center text-sm cursor-pointer'>{cartItem.length}</span>) }
            <CgProfile size={30} className='cursor-pointer'/>
        </div>
        
        <div className='md:hidden '>
            <GiHamburgerMenu size={30} />
        </div>
    </div>
    
    </div>
  )
}

export default Navbar