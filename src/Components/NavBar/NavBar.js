import React from 'react';
import { Link } from 'react-router-dom';
import Nike from '../../images/Nike.png';
import './Navbar.css'

const NavBar = () => {
    return (
        <nav className='navigation'>
            <div>
                <Link to='/'><img src={Nike} width='100px' height='40px' alt='Logo' /></Link>
            </div>
            <div>
                <Link className='nav-list' to='/'>Home</Link>
                <Link className='nav-list' to='about'>About</Link>
                <Link className='nav-list' to='product'>Product</Link>
            </div>
        </nav>
    )
}

export default NavBar;