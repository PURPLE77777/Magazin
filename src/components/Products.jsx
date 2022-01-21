import React from "react";
import products from "../data/products.js";
import "../styles/Products.scss";
import { Link } from "react-router-dom";

export default function Products() {
    console.log(products);
    return (
        <div className="products">
            <div className="products-wrap">
                <div className="title">
                    <h1>Products</h1>
                </div>
                <div className="items">
                    {products.map((product) => {
                        return (
                            <div className="item" key={product.id}>
                                <div className="item-img">
                                    <Link to="#">
                                        <img
                                            src={product.img}
                                            alt="product-img"
                                        ></img>
                                    </Link>
                                </div>
                                <div className="item-info">
                                    <div className="item-name">
                                        <Link to="#" className="name">
                                            {product.name}
                                        </Link>
                                    </div>
                                    <div className="item-description">
                                        {product.description}
                                    </div>
                                    <div className="item-price">
                                        <span className="price">
                                            {product.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
