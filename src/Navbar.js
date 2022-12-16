import React from 'react'
import Links from './Data'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
        <div className='logo'>
            <h1>WATCH</h1>
        </div>
        <div className='nav-menu'>
            <ul>
                {Links.map(Link=>(
                    <li>
                        <a href="">{Link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <button>Login/Signup</button>
            <button>Cart Button</button>
        </div>
    </div>
    <div className='nav-search'>
    <input type="input" placeholder='Search for an Item'/>
    </div>
    </div>
  )
}

export default Navbar