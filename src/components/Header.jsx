import React from "react";
import "../styles/Header.scss";
import brand from "../img/brand.svg";
import burgerMenu from "../img/burger-menu.svg";
import { USER_NAME } from "./reducers/consts";

import {
    Show_Modal,
    Show_SignIn,
    Show_LogIn,
    Show_Menu,
    Forget_Me,
} from "./reducers/actions";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function Header() {
    const dispatch = useDispatch();

    const userName = useSelector((state) => state.AuthReducer.userName);
    const showMenu = useSelector((state) => state.ModalReducer.showMenu);

    function openModalSignIn() {
        dispatch(Show_Menu(false));
        dispatch(Show_Modal(true));
        dispatch(Show_SignIn(true));
    }
    function openModalLogIn() {
        dispatch(Show_Menu(false));
        dispatch(Show_Modal(true));
        dispatch(Show_LogIn(true));
    }
    function openMenu() {
        dispatch(Show_Modal(true));
        dispatch(Show_Menu(true));
    }
    function closeMenu(value) {
        dispatch(Show_Menu(value));
        dispatch(Show_Modal(value));
    }
    function forgetMe() {
        localStorage.removeItem(USER_NAME);
        dispatch(Forget_Me());
    }
    return (
        <div className="Header">
            <div className="header-container">
                <div className="brend">
                    <Link to="/">
                        <img src={brand} alt="brand"></img>
                    </Link>
                </div>
                <div className={showMenu ? "menu menu-show" : "menu"}>
                    <button className="close-menu" onClick={() => closeMenu()}>
                        X
                    </button>
                    <div className="menu-list">
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
                    <div className="menu-search">
                        <div className="login-btns">
                            {userName ? (
                                <div className="auth">
                                    <span className="welcome">
                                        Welcome,{" "}
                                        <Link to="/home">{userName}...!</Link>
                                    </span>
                                    <button
                                        className="sign-out"
                                        onClick={() => forgetMe()}
                                    >
                                        Sign out
                                    </button>
                                </div>
                            ) : (
                                <div className="not-auth">
                                    <button
                                        className="sign-in"
                                        onClick={() => {
                                            openModalSignIn();
                                        }}
                                    >
                                        Sign in
                                    </button>
                                    <span className="OR">|</span>
                                    <button
                                        className="log-in"
                                        onClick={() => {
                                            openModalLogIn();
                                        }}
                                    >
                                        Log in
                                    </button>
                                </div>
                            )}
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
                <div className="burger-menu-wrap" onClick={() => openMenu()}>
                    <img
                        className="burger-menu"
                        src={burgerMenu}
                        alt="burger-menu"
                    ></img>
                </div>
            </div>
        </div>
    );
}
