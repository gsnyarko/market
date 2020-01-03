import React, { Component } from 'react';
import {showRoom, detailProduct} from '../Data';


const ProductContext = React.createContext();


class ProductProvider extends Component {
    state ={ products: [], 
        detailProduct: detailProduct,
        cart: [],
        modalOpen: true,
        modalProduct: detailProduct,
     };
    
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
    const product = this.state.products.find(item => item.id === id)
    return product;
} 


    handledetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {detailProduct: product}
        }) 
    }

    addToCart = (id) => {
        let tempProduct = [...this.state.products]
        const index = tempProduct.indexOf(this.getItem(id))
        const product = tempProduct[index]
        product.inCart = true;
        product.count= 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {product: tempProduct, cart: [...this.state.cart, product] }
        })

    }
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }
    closeModal = () => {
        this.setState(()=> {
            return {modalOpen: false}
        })
    }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail:this.handledetail, 
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal

            }} >
                {this.props.children}
            </ProductContext.Provider >
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export  { ProductProvider, ProductConsumer };