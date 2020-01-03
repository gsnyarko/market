import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Notfound from './component/Notfound.js';
import Cart from './component/Cart';
import Details from './component/Details';
import {ProductProvider} from './component/context';
import Modal from './component/Modal';

function App() {
  return (
    <ProductProvider>
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} ></Route>
        <Route path='/details' component={Details} ></Route>
        <Route path='/cart' component={Cart} ></Route>
        <Route  component={Notfound} ></Route>    
      </Switch>
      <Modal/>
    </div>
    </Router>
    </ProductProvider>
    
  );
}

export default App;
