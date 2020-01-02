import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import car from '../logo.svg';
import cart from '../cart.svg';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className='Navbar'>

                <Link to='/' className='item'>
               <img src={car} alt='car'></img>
               </Link>
               <Link to='/' className='item'>
                   Products
               </Link>
               <Link to='/cart' className='item'>
                   <div className='click'>
                       <img src={cart} alt='cart'></img>Cart
                   </div>
               </Link>
            </nav>
        );
    }
}

export default Navbar;