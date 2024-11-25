import React, { useState } from 'react';
import './App.css';
import 'h8k-components';
import HackerMart from './components/HackerMart';
import { BrowserRouter as Router } from "react-router-dom";
import { CartContext } from './provider/app';
import products from './data/products';

const title = "Market";

const App = () => {
    const [productsList, setProductsList] = useState(products);
    // const [cartList, setCartList] = useState(products);


    return (
        <div className="App">
            <CartContext.Provider value={{productsList}}>
                <h8k-navbar header={title}></h8k-navbar>
                <Router>
                    <HackerMart />
                </Router>
            </CartContext.Provider>
        </div>
    );
}

export default App;
