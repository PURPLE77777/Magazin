import React from "react";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-wrap">
            <div className="footer-list">
                <ul className="list">
                    <li className="list-item">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
