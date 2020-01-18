import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function CartTotal({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

    return (
        <>
            <div className='total-container'>
                <Link to='/'>
                    <button className='total-btn'
                        onClick={() => clearCart()}>CLEAR CAT
                    </button>
                </Link>
                <h5>
                    <span>Subtotal :  </span>
                    <strong>€ {cartSubTotal}</strong>
                </h5>
                <h5>
                    <span>Tax :  </span>
                    <strong>€ {cartTax}</strong>
                </h5>
                <h5>
                    <span>Total :  </span>
                    <strong>€ {cartTotal}</strong>
                </h5>
            </div>

        </>
    );

}

export default CartTotal;