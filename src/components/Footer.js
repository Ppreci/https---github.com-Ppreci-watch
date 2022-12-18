import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        
        <div className='row-1'>
        <h1>About</h1>
         <Link><p>About Us</p></Link>
         <Link><p>Delivery Information</p></Link>
         <Link><p>Shipping Locations</p></Link>
         <Link><p>Privacy policy</p></Link>
         <Link><p>Terms & Conditions</p></Link>
        </div>
        <div className='row-2'>
        <h1>Contact Us</h1>
         <Link><p>Via Email</p></Link>
         <Link><p>Via Telephone</p></Link>
         <Link><p>Via Whatsapp</p></Link>
         <Link><p>Live Chat</p></Link>
        </div>
        <div className='row-3'>
        <h1>My Account</h1>
         <Link><p>Sign In</p></Link>
         <Link><p>Sign Up</p></Link>
         <Link><p>View Cart</p></Link>
         <Link><p>FAQs</p></Link>
         <Link><p>Help</p></Link>
        </div>
        <div className='row-4'>
         <h1>Socials</h1>
         <Link><p>Facebook</p></Link>
         <Link><p>Twitter</p></Link>
         <Link><p>Instagram</p></Link>
         <Link><p>Linkedin</p></Link>
        </div>
        <div className='newsletter'>
            <h1>Newsletter</h1>
            <input type="text" placeholder='Subscribe to our newsletter' />
            <button>Subscribe</button>
        </div>
    </div>
    <div className='copyright'>
    <h2>Copyright &copy; 2022 WATCH. All rights reserved</h2>
    </div>
    </div>
  )
}

export default Footer