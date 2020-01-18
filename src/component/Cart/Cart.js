import React, { Component } from 'react';
import Title from '../title';
import './Cart.css';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../context';
import CartList from './CartList';
import CartTotal from './CartTotal';

class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { cart } = value;
                    return cart.length > 0 ?
                        <>
                            <Title name='Your' title='Cart' />
                            <div className='cart'>
                                <h4>PRODUCTS</h4>
                                <h4>PRODUCT NAME</h4>
                                <h4>PRICE</h4>
                                <h4>QUANTITY</h4>
                                <h4>REMOVE</h4>
                                <h4>TOTAL</h4>
                                </div>

                                <CartList value={value}/>
                                <CartTotal value={value} />
                               
                            
                        </> :
                        <EmptyCart />
                }}
            </ProductConsumer>

        );
    }
}

export default Cart;