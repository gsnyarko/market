import React, { Component } from 'react';
import { showRoom, detailProduct } from '../Data';



const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        //  cart: showRoom,
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        showRoom.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products: tempProducts };
        })

    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handledetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    }

    addToCart = (id) => {
        let tempProduct = [...this.state.products]
        const index = tempProduct.indexOf(this.getItem(id))
        const product = tempProduct[index]
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return { product: tempProduct, cart: [...this.state.cart, product] }
        },
            () => this.addTotal()
        )
    }

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }
    
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart]
        let selected = tempCart.find(car => car.id === id)
        const index = tempCart.indexOf(selected)
        const product = tempCart[index]
        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {cart:[...tempCart]}
        }, () => {this.addTotal()})
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]
        let selected = tempCart.find(car => car.id === id)
        const index = tempCart.indexOf(selected)
        const product = tempCart[index];
        product.count =product.count - 1 ;
        if(product.count === 0) {
            return this.removeItem(id)
        } else {
        product.total = product.count * product.price;
        this.setState(() => {
            return {cart:[...tempCart]}
        }, () => {this.addTotal()})

        }
        
      
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]

        tempCart = tempCart.filter(value => value.id !== id)

        const index = tempProducts.indexOf(this.getItem(id))
        const removedProduct = tempProducts[index]
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {cart:[...tempCart],
                products:[...tempProducts]
            }
        }, () => {
            this.addTotal()
        }
        )
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }

        }, () => {
            this.setProducts();
        }, () => {
            this.addToCart()
        })
    }

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total))
        let tax = parseFloat((subTotal * 0.15).toFixed(2))
        let total = tax + subTotal
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            };
        })
    }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handledetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,


            }} >
                {this.props.children}
            </ProductContext.Provider >
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };