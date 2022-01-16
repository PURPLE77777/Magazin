import React from "react";
import "../styles/Header.scss";
import brand from "../img/brand.svg";
import Modal from "./Modal.jsx";
import { useDispatch } from "react-redux";

// import { Link } from "react-router-dom";

export default function Header() {
    const dispatch = useDispatch();
    const setShowModalSignIn = () => {
        dispatch({ type: "SHOW_MODAL", data: true });
        dispatch({ type: "SHOW_SignIn", data: true });
    };
    const setShowModalLogIn = () => {
        dispatch({ type: "SHOW_MODAL", data: true });
        dispatch({ type: "SHOW_LogIn", data: true });
    };

    return (
        <div className="Header">
            <div className="header-container">
                <div className="brand">
                    <a href="/">
                        <img src={brand} alt="brand"></img>
                    </a>
                    <div className="menu">
                        <ul className="menu-list">
                            <li className="list-item">
                                <a href="/home">Home</a>
                            </li>
                            <li className="list-item">
                                <a href="/products">Products</a>
                            </li>
                            <li className="list-item">
                                <a href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="search-block">
                    <div className="login-btns">
                        <button
                            className="sign-in"
                            onClick={() => setShowModalSignIn()}
                        >
                            Sign in
                        </button>
                        <span className="OR">|</span>
                        <button
                            className="log-in"
                            onClick={() => setShowModalLogIn()}
                        >
                            Log in
                        </button>
                        <span className="welcome">Hello, Your Name...</span>
                        <button className="sign-out">Sign out</button>
                        <Modal></Modal>
                    </div>
                    <div className="searcher">
                        <span className="search-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="search"
                        ></input>
                        <button className="search-button search-button-1">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
