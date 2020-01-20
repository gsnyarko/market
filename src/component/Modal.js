import React, { Component } from 'react';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';
import './Modal.css';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct

                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <div className="modal-content">
                                <div className="modal-header">
                                    <span className="close">&times;</span>
                                    <h2>Item Added to Cart</h2>
                                </div>
                                <div className="modal-body">
                                    <img className='modal-img' src={img} alt='product'></img>
                                    <h4>{title} </h4>
                                    <h4>Price: € {price} </h4>
                                   
                                </div>
                                <div className="modal-footer">
                                    <Link to='/'>
                                    <button className='mbt' onClick={() => closeModal()}>Back To Shop</button>
                                    </Link>
                                    <Link to='/cart'>
                                    <button className='mbt' onClick={() => closeModal()}>Go To Cart</button>
                                    </Link>

                                </div>
                            </div>




                        );
                    }
                }}



            </ProductConsumer>
        );
    }
}

export default Modal;