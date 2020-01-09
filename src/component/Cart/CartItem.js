import React from 'react';
import './Cart.css';
import trash from '../../Trash.svg'

function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (<>
        <div className='rows-container'>
            <img className='row-item' src={img} alt='product'
                style={{ width: '5rem', height: '10rem' }}></img>
            <div className='row-item'>
                product: {title}
            </div>
            <div className='row-item'>
                price: {price}
            </div>
            <div className='row-item'>
                <div className='bt-container'>
                    <button onClick={() => decrement(id)}>-</button>
                    <button>{count}</button>
                    <button onClick={() => increment(id)}>+</button>
                </div>
            </div>
            <div className='row-item'>
                <img src={trash} alt='trash-icon' onClick={() => removeItem(id)}></img>
            </div>

            <div className='row-item'>
                <strong>Item Total: € {total}</strong>
            </div>
        </div>
    </>);
}

export default CartItem;