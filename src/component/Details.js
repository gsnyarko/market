import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './context';
import './Details.css';


class Details extends Component {
    render() {
        return (<>
            <ProductConsumer>
                {value => {
                    const { id, img, company, info, price, title, inCart } = value.detailProduct
                    return (
                        <div className='details-sec'>

                            <div className='productTitle'>
                                <h1>{title.toUpperCase()}</h1>
                            </div>

                            <div className='Detail-container'>
                                <div className='Det-item'>
                                    <img src={img} alt='images'></img> </div>

                                <div className='Det-item'>
                                    <h2>Model : {title}</h2>
                                    <h4>Made by : {company}</h4>
                                    
                                    <h4>Price: <span className='euro'>€</span>
                                        {price}</h4>
                             
                                    <p className='infotext'>
                                        Product info : </p>{info.toUpperCase()}
                                        <div>
                                        <Link to ='/'>
                                            <button className='Det-btn'>BACK TO SHOP</button>
                                    
                                        </Link>
                                        <button className='Add-btn' disabled={inCart ? true : false}
                                        onClick={()=> {value.addToCart(id);
                                        value.openModal(id);} } >
                                            {inCart ? 'In Cart' : 'Add to Cart'}
                                        </button>
                                        </div>

                                </div>

                            </div>


                        </div>
                    )
                }}


            </ProductConsumer>




            {/* <Link to='/'>
                <div>BACK TO HOMEPAGE</div>
            </Link> */}
        </>);
    }
}

export default Details;