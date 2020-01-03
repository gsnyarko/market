import React, { Component } from 'react';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';

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
                                    <p> {title} </p>
                                    <p>Some other text...</p>
                                </div>
                                <div class="modal-footer">
                                    <h3>Modal Footer</h3>
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