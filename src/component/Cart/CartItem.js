import React from 'react';
import './Cart.css';
import trash from '../../Trash.svg'

function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (<>
        <div className='rows-container'>
            <div className='row-item'>
            <h4>PRODUCT</h4>
            <img  src={img} alt='product' 
                style={{ width: '100%', height: 'auto' }}></img>
            </div>
            <div className='row-item'>
            <h4> NAME</h4>
                <div>{title}</div> 
            </div>
            <div className='row-item'>
            <h4>PRICE</h4>
                <div>€ {price}</div>
            </div>
            <div className='row-item'>
                <h4>QTY</h4>
                <div className='bt-container'>
                    <button onClick={() => decrement(id)}>-</button>
                    <button>{count}</button>
                    <button onClick={() => increment(id)}>+</button>
                </div>
            </div>
            <div className='row-item'>
            <h4>REMOVE</h4>
                <img src={trash} alt='trash-icon' onClick={() => removeItem(id)}></img>
            </div>

            <div className='row-item'>
            <h4>TOTAL</h4>
                <strong> € {total}</strong>
            </div>
        </div>
    </>);
}

export default CartItem;