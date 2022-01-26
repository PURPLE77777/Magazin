import React from "react";
import { Link } from "react-router-dom";
import imgProfile from "../img/profile-anon.png";
import "../styles/Profile.scss";
import { useSelector } from "react-redux";

export default function Profile() {
    const userName = useSelector((state) => state.AuthReducer.userName);
    return (
        <div className="profile">
            <div className="profile-wrap">
                <div className="profile-img">
                    <img src={imgProfile} alt="profile-img"></img>
                </div>
                <div className="profile-info">
                    <div className="profile-name">
                        <h4>{userName}</h4>
                    </div>
                    <div className="collections">
                        <ul className="list-collections">
                            <li className="item-collection">
                                <Link to="/item">Collection 1</Link>
                            </li>
                            <li className="item-collection">
                                <Link to="/item">Collection 2</Link>
                            </li>
                            <li className="item-collection">
                                <Link to="/item">Collection 3</Link>
                            </li>
                            <li className="item-collection">
                                <Link to="/item">Collection 4</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
