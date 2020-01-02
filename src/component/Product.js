import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../cart.svg';
import './Product.css';
import { ProductConsumer } from './context';
import PropTypes from 'prop-types';
//import {showRoom} from '../Data';

class Product extends Component {
    render() {

        const { id, title, img, price, inCart } = this.props.product;
        return (
            

            <div className='card'>
                <ProductConsumer>
                    {(value) => ( 
                    <div className='img-container' onClick={() => value.handleDetail}>
                    <Link to='/details'>
                        <img src={img} alt='product' className='card-img-top'></img>
                    </Link>
                    <button className='cart-btn' onClick={() => console.log('add to cart')}
                        disabled={inCart ? true : false}>
                        {inCart ? (<p disabled> {''} in Cart</p>) :
                            (<img src={cart} className='' alt=''></img>)}

                    </button>
                    </div>


                    )}
                
                    </ProductConsumer>
                    
                   
                <div className='card-footer'>
                    <p className='title'>{title}</p>
                    <h5 className='cash'>
                        <span className='euro'>€</span>
                        {price}</h5>
                        
                        
                </div>
            </div>
           
        );
    }
}
Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool

    }).isRequired
}

export default Product;