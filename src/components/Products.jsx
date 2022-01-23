import React from "react";
import products from "../server/products.js";
import "../styles/Products.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Selected_Product, Product } from "./reducers/actions.js";

export default function Products() {
    const dispatch = useDispatch();

    function selectItem(product) {
        dispatch(Selected_Product(true));
        dispatch(Product(product));
    }
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
                                    <Link
                                        to="/item"
                                        onClick={() => selectItem(product)}
                                    >
                                        <img
                                            src={product.img}
                                            alt="product-img"
                                        ></img>
                                    </Link>
                                </div>
                                <div className="item-info">
                                    <div className="item-name">
                                        <Link
                                            to="/item"
                                            className="name"
                                            onClick={() => selectItem(product)}
                                        >
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
