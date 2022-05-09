import React from "react";
import style from "../styles/login.module.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../config/firebase";

const Login = props => {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return (
        <div className={style.login}>
            <div className={style.loginContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png" alt="" />

                <h2>Sign in to Organization HQ</h2>
                <p>organization.slack.com</p>
                <Button onClick={signIn} className={style.signInBtn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;