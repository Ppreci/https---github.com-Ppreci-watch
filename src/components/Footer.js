import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-blue-700 text-white w-full'>
    <div className='text-white pt-[50px] w-full grid grid-cols-2 place-items-center g gap-x-4 gap-y-4 md:grid-cols-4 mb-[20px]'>
        <div className='row-1'>
        <h1 className='mb-[7px] font-bold text-2xl'>About</h1>
         <Link><p>About Us</p></Link>
         <Link><p>Delivery Information</p></Link>
         <Link><p>Shipping Locations</p></Link>
         <Link><p>Privacy policy</p></Link>
         <Link><p>Terms & Conditions</p></Link>
        </div>
        <div className='row-2'>
        <h1 className='mb-[7px] font-bold text-2xl'>Contact Us</h1>
         <Link><p>Via Email</p></Link>
         <Link><p>Via Telephone</p></Link>
         <Link><p>Via Whatsapp</p></Link>
         <Link><p>Live Chat</p></Link>
        </div>
        <div className='row-3'>
        <h1 className='mb-[7px] font-bold text-2xl'>My Account</h1>
         <Link><p>Sign In</p></Link>
         <Link><p>Sign Up</p></Link>
         <Link><p>View Cart</p></Link>
         <Link><p>FAQs</p></Link>
         <Link><p>Help</p></Link>
        </div>
        <div className='row-4'>
         <h1 className='mb-[7px] font-bold text-2xl'>Socials</h1>
         <Link><p>Facebook</p></Link>
         <Link><p>Twitter</p></Link>
         <Link><p>Instagram</p></Link>
         <Link><p>Linkedin</p></Link>
        </div>
    </div>
    <div className='copyright'>
    <h2 className='text-[20px] text-center p-[20px]'>Copyright &copy; 2022 WATCH</h2>
    </div>
    </div>
  )
}

export default Footer