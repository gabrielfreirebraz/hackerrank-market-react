import React, { useContext } from "react";
import "./index.css";
import { CartContext } from "../../provider/app";



function addToCart(product) {

    const { cartList, setCartList } = useContext(CartContext)


    setCartList()

}



function Home() {


    const { productsList } = useContext(CartContext)


    return (
        <div className="layout-column align-items-center justify-content-start" data-testid="home">
            <h3 data-testid="home-heading">Home</h3>
            <div className="products" data-testid="featured-products">
                <div className="card w-200 pt-30 pb-8 mt-10">
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Cost</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody data-testid="products">
                            {productsList.map((currValue, key)=> {

                                return <>
                                    <tr key={`row-${key}`}>
                                        <td data-testid={`product-name-1`}>{currValue.name}</td>
                                        <td data-testid={`product-description-1`}>{currValue.description}</td>
                                        <td data-testid={`product-cost-1`}>{currValue.price}</td>
                                        <td>
                                            <button data-testid={`add-to-cart-button-1`} onClick={addToCart}>
                                                Add to cart
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
