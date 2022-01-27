import React from "react";
import "../styles/App.scss";
import "../styles/Main.scss";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import About from "./About.jsx";
import Modal from "./Modal.jsx";
import Profile from "./Profile.jsx";
import Item from "./Item.jsx";

import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div className="wrap">
                <Header></Header>
                <Modal></Modal>
                <div className="main">
                    <Routes>
                        <Route path="/" element={Home()}></Route>
                        <Route path="/home" element={Home()}></Route>
                        <Route path="/products" element={Products()}></Route>
                        <Route path="/about" element={About()}></Route>
                        <Route path="/profile" element={Profile()}></Route>
                        <Route path="/item" element={Item()}></Route>
                        {/* <Route path="*" element={Home()}></Route> */}
                    </Routes>
                </div>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
}
