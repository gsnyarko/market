import React, { Component } from 'react';
import {showRoom, detailProduct} from '../Data';


const ProductContext = React.createContext();


class ProductProvider extends Component {
    state ={ products: [], detailProduct: detailProduct };
    
componentDidMount() {
    this.setProducts();
}

setProducts = () => {
    let tempProducts = [];
    showRoom.forEach(item => {
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
        return {products: tempProducts};
    })

}
getItem =(id) => {
    const product = this.state.find(item => item.id === id)
    return product
} 


    handledetail = (id) => {
        const product = this.getItem();
        this.setState(()=> {
            return {detailProduct: product}
        }) 
    }

    addToCart = (id) => {
        console.log(`ok Add to cart.id is ${id}`)
    }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, handleDetail:this.handledetail, addToCart: this.addToCart

            }} >
                {this.props.children}
            </ProductContext.Provider >
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export  { ProductProvider, ProductConsumer };