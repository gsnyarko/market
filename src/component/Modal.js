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
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close">&times;</span>
                                    <h2>Item Added to Cart</h2>
                                </div>
                                <div class="modal-body">
                                    <img className='modal-img' src={img} alt='product'></img>
                                    <h4>{title} </h4>
                                    <h4>Price: € {price} </h4>
                                    <p>Some other text...</p>
                                </div>
                                <div class="modal-footer">
                                    <Link to='/'>
                                    <botton className='mbt' onClick={() => closeModal()}>Shopping</botton>
                                    </Link>
                                    <Link to='/cart'>
                                    <botton className='mbt' onClick={() => closeModal()}>Go To Cart</botton>
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