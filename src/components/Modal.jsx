import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { USER_NAME } from "./reducers/consts.js";
import "../styles/Modal.scss";
import {
    Show_Modal,
    Show_SignIn,
    Show_LogIn,
    Remember_Me,
} from "./reducers/actions";

export default function Modal() {
    const showModal = useSelector((state) => state.ModalReducer.showModal);
    const showSignIn = useSelector((state) => state.ModalReducer.showSignIn);
    const showLogIn = useSelector((state) => state.ModalReducer.showLogIn);

    const [statusPass, setStatusPass] = useState(false);
    const [statusName, setStatusName] = useState(false);
    const [statusNewName, setStatusNewName] = useState(false);
    const [statusEmail, setStatusEmail] = useState(false);

    const [errorPass, setErrorPass] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorNewName, setErrorNewName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);

    const validator = (type, value) => {
        switch (type) {
            case "newname": {
                const regexp = /[a-zA-Z\d]{10,}/gm;
                if (regexp.test(value)) {
                    setStatusNewName(false);
                    setErrorNewName(true);
                } else {
                    setStatusNewName(true);
                    setErrorNewName(false);
                }
                break;
            }
            case "name": {
                const regexp = /[a-zA-Z\d]{6,}/gm;
                if (regexp.test(value)) {
                    setStatusName(true);
                    setErrorName(false);
                } else {
                    setStatusName(false);
                    setErrorName(true);
                }
                break;
            }
            case "password": {
                const regexp = /[a-zA-Z\d]{6,}/gm;
                if (regexp.test(value)) {
                    setStatusPass(true);
                    setErrorPass(false);
                } else {
                    setStatusPass(false);
                    setErrorPass(true);
                }
                break;
            }
            case "email": {
                const regexp =
                    // eslint-disable-next-line no-useless-escape
                    /^([a-zA-Z\d_-]+([\.]?[a-zA-Z\d_-]+)*)+@([a-zA-Z\d_-])+([\.][a-z]{2,6})$/gm;
                if (regexp.test(value)) {
                    setStatusEmail(true);
                    setErrorEmail(false);
                } else {
                    setStatusEmail(false);
                    setErrorEmail(true);
                }
                break;
            }
            default:
                return false;
        }
    };

    const dispatch = useDispatch();

    function closeModalLogIn() {
        dispatch(Show_LogIn(false));
        dispatch(Show_Modal(false));
    }

    function closeModalSignIn() {
        dispatch(Show_SignIn(false));
        dispatch(Show_Modal(false));
    }

    function LogIn(e) {
        e.preventDefault();
        closeModalLogIn();
        dispatch(Remember_Me(e.target.elements["log-in-uniquename"].value));
        localStorage.setItem(
            USER_NAME,
            e.target.elements["log-in-uniquename"].value
        );
        for (let i = 0; i < e.target.elements.length - 1; i++) {
            e.target.elements[i].value = "";
        }
    }

    function SignIn(e) {
        e.preventDefault();
        closeModalSignIn();
    }

    return (
        <div className={showModal ? "modal-window show" : "modal-window"}>
            <div
                className={
                    showLogIn
                        ? "modal_form_log-in log-in-show"
                        : "modal_form_log-in"
                }
            >
                <div className="title">Log In</div>
                <button
                    className="modal-close"
                    onClick={() => {
                        closeModalLogIn();
                    }}
                >
                    X
                </button>
                <form className="form-in" onSubmit={(e) => LogIn(e)}>
                    <label htmlFor="log-in-email"></label>
                    <input
                        id="log-in-email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => validator("email", e.target.value)}
                        required
                    ></input>
                    <span className={errorEmail ? "error see" : "error"}>
                        Entered email incorrect !
                    </span>
                    <br></br>
                    <label htmlFor="log-in-uniquename"></label>
                    <input
                        id="log-in-uniquename"
                        name="log-in-uniquename"
                        type="text"
                        placeholder="Unique name"
                        onChange={(e) => validator("newname", e.target.value)}
                        required
                    ></input>
                    <span className={errorNewName ? "error see" : "error"}>
                        This name already exists!
                    </span>
                    <br></br>
                    <label htmlFor="log-in-password"></label>
                    <input
                        id="log-in-password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => validator("password", e.target.value)}
                        required
                    ></input>
                    <span className={errorPass ? "error see" : "error"}>
                        Password must have 6 or more symbols
                    </span>
                    <br></br>
                    <button
                        type="submit"
                        disabled={!(statusNewName && statusEmail && statusPass)}
                    >
                        Log in
                    </button>
                </form>
            </div>
            <div
                className={
                    showSignIn
                        ? "modal_form_sign-in sign-in-show"
                        : "modal_form_sign-in"
                }
            >
                <div className="title">Sign In</div>
                <button
                    className="modal-close"
                    onClick={() => {
                        closeModalSignIn();
                    }}
                >
                    X
                </button>
                <form className="form-in" onSubmit={(e) => SignIn(e)}>
                    <label htmlFor="sign-in-uniquename"></label>
                    <input
                        id="sign-in-uniquename"
                        name="sign-in-uniquename"
                        type="text"
                        placeholder="Unique name"
                        onChange={(e) => validator("name", e.target.value)}
                        required
                    ></input>
                    <span className={errorName ? "error see" : "error"}>
                        Entered name incorrectly
                    </span>
                    <br></br>
                    <label htmlFor="sign-in-password"></label>
                    <input
                        id="sign-in-password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => validator("password", e.target.value)}
                        required
                    ></input>
                    <span className={errorPass ? "error see" : "error"}>
                        Entered password incorrectly
                    </span>
                    <br></br>
                    <button
                        type="submit"
                        disabled={!(statusName && statusPass)}
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}
