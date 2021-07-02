import "./Login.css";
import React, { useContext } from "react";
import firebase from "firebase";
import { FirebaseAuth } from "react-firebaseui";
import { Divider } from "@material-ui/core";

function Login() {
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false,
        },
    };


    return (
        <div className="login">
            <div className="login__top">
                <img src="https://img.icons8.com/fluent/50/000000/financial-growth-analysis.png" alt="" />
                <h1>Expensify</h1>
            </div>
            <div className="login__bottom">
                <h1>SignIn</h1>
                <Divider style={{ marginBottom: '30px' }} />
                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        </div>
    )
}

export default Login
