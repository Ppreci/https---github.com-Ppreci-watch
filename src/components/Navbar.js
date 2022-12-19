import React from 'react'
import {Links} from '../Data'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {CgProfile}from 'react-icons/cg'
import {BsCart4}from 'react-icons/bs'
import {GiHamburgerMenu}from 'react-icons/gi'

const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
        <div className='logo'>
            <h1>WATCH</h1>
        </div>
        <div className='nav-menu'>
            <ul>
                {Links.map(Linkk=>(
                    <li>
                        <Link to={Linkk.link}>{Linkk.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <CgProfile className='profile'/>
            <BsCart4 className='cart'/>
        </div>
        <div className="mobileMenu">
            <GiHamburgerMenu />
        </div>
    </div>
    <div className='nav-search'>
    <input type="input" placeholder='Search for an Item'/>
    </div>
    </div>
  )
}

export default Navbar