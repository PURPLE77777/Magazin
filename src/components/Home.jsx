import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

export default function Home() {
    return (
        <div className="home">
            <div className="welcome">
                <h1>
                    Welcome to "<span className="magazin-name">Magazin</span>"
                </h1>
                <div className="main-info">
                    <div className="info-text">
                        <span className="text">
                            Collect your collection of favorite products and
                            share with your friends
                        </span>
                    </div>
                    <div className="to-deal">
                        <Link to="/products">Let's get started!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
