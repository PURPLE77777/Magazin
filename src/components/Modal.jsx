import React from "react";
import "../styles/Modal.scss";
import { Show_Modal, Show_SignIn, Show_LogIn } from "./reducers/actions";
import { bindActionCreators } from "redux";
import { mapStateToProps } from "./reducers/mapStateToProps.js";
import { ModalComponent } from "./reducers/consts.js";
import { connect } from "react-redux";

function Modal({
    showModal,
    showSignIn,
    showLogIn,
    modalShow,
    signInShow,
    logInShow,
}) {
    console.log({
        showModal,
        showSignIn,
        showLogIn,
        modalShow,
        signInShow,
        logInShow,
    });
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
                        console.log("btn: LogIn");
                        logInShow();
                        modalShow();
                    }}
                >
                    X
                </button>
                <form className="form-in">
                    <label htmlFor="log-in-email"></label>
                    <input
                        id="log-in-email"
                        type="email"
                        placeholder="Email"
                        required
                    ></input>
                    <br></br>
                    <label htmlFor="log-in-firstname"></label>
                    <input
                        id="log-in-firstname"
                        type="firstname"
                        placeholder="Firstname"
                        required
                    ></input>
                    <br></br>
                    <label htmlFor="log-in-password"></label>
                    <input
                        id="log-in-password"
                        type="password"
                        placeholder="Password"
                        required
                    ></input>
                    <br></br>
                    <button>Log in</button>
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
                        console.log("btn: SignIn");
                        signInShow();
                        modalShow();
                    }}
                >
                    X
                </button>
                <form className="form-in">
                    <label htmlFor="sign-in-email"></label>
                    <input
                        id="sign-in-email"
                        type="email"
                        placeholder="Email"
                        required
                    ></input>
                    <br></br>
                    <label htmlFor="sign-in-password"></label>
                    <input
                        id="sign-in-password"
                        type="password"
                        placeholder="Password"
                        required
                    ></input>
                    <br></br>
                    <button>Sign in</button>
                </form>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        modalShow: bindActionCreators(Show_Modal, dispatch),
        signInShow: bindActionCreators(Show_SignIn, dispatch),
        logInShow: bindActionCreators(Show_LogIn, dispatch),
    };
}

export default connect(
    mapStateToProps(ModalComponent),
    mapDispatchToProps
)(Modal);
