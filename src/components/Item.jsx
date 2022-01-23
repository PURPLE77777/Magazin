import React from "react";
import { useSelector } from "react-redux";
import "../styles/Item.scss";

export default function Item() {
    const productSelected = useSelector(
        (state) => state.ProductReducer.productSelected
    );
    const product = useSelector((state) => state.ProductReducer.product);
    return (
        <div className="item-profile">
            <div className="item-profile-wrap">
                {productSelected ? (
                    <>
                        <div className="product">
                            <div className="item-img">
                                <img src={product.img} alt="item-img"></img>
                            </div>
                            <div className="item-info">
                                <div className="item-name">{product.name}</div>
                                <div className="item-description">
                                    {product.description}
                                </div>
                                <div className="item-price">
                                    {product.price}
                                </div>
                                <div className="item-tags">
                                    <div className="tags">
                                        {" "}
                                        {product.tags.reduce((arr, tag) => {
                                            return arr + tag + " ";
                                        }, "")}
                                    </div>
                                    <div className="likes">
                                        <input
                                            id="like"
                                            type="checkbox"
                                        ></input>
                                        <label
                                            className="like"
                                            htmlFor="like"
                                        ></label>
                                        <span className="number-likes">
                                            312312
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-comments">
                            <div className="comments"></div>
                            <div className="make-comments">
                                <textarea placeholder="Leave a review"></textarea>
                                <button className="sent-comment">Send</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="product-not-select">
                        <h3>Please, select some product</h3>
                    </div>
                )}
            </div>
        </div>
    );
}
