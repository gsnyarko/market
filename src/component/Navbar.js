import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import car from '../logo.svg';
import cart from '../cart.svg';
import search from '../search.svg';

import './Navbar.css'

class Navbar extends Component {

    // state = {
    //     search: ''
    // }

    // updateSearch(e) {
    //     this.setState({search: e.target.value})
    // }



    render() {
        return (
            <nav className='Navbar'>

                <Link to='/' className='item'>
                <div className='Home'>
               <img src={car} alt='car'></img>HOME
               </div>
               </Link>
               <Link to='/' className='item'>
                   PRODUCTS
               </Link>
              
               <Link to='/cart' className='item'>
                   <div className='click'>
                       <img src={cart} alt='cart'></img>CART
                   </div>
               </Link>

            <Link to='/contacts' className="item">CONTACT US
            </Link>
            <div className='item search'>
            <input type="text" placeholder="Search.." /> 
            {/* onChange={()=> this.updateSearch()} */}
          <img src={search} alt='search'></img>
          </div>
            </nav>
        );
    }
}

export default Navbar;