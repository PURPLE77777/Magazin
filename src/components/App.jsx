import React from "react";
import "../styles/App.scss";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
// import Home from "./Home.jsx";
// import Products from "./Products.jsx";
// import About from "./About.jsx";

// import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div className="wrap">
            <Header></Header>
            {/* <Routes>
                <Route path="/home" element={Home()}></Route>
                <Route path="/products" element={Products()}></Route>
                <Route path="/about" element={About()}></Route>
                <Route path="*" element={Home()}></Route>
            </Routes> */}
            <Footer></Footer>
        </div>
    );
}
