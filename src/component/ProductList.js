import React, { Component } from 'react';
import Title from './title';
import {ProductConsumer} from './context';
import Product from './Product';
import '../App.css';

class ProductList extends Component {
  
    render() {
        return (
            <>
            {/* <div className='plist'>
            <div className='plistcontainer'> */}
                <Title name='our' title='product'></Title>
            <div className='plistrow'>
                 <ProductConsumer>
                    {(value)=> {
                    return value.products.map(product => {
                        return <Product key={product.id} product={product}/>
                    })
                    }}
                </ProductConsumer> 

            {/* </div>
            </div> */}
            </div>
            </>
            // <div>
            //     <Product />
            // </div>
        );
    }
}

export default ProductList;