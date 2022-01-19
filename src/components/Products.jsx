import React from "react";
import products from "../data/products.js";

export default function Products() {
    console.log(products["Sport equipment"]);
    return (
        <div className="products">
            <h1>Products</h1>
        </div>
    );
}
