import React from "react";
import style from "../styles/login.module.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "../datalayer/StateProvider";
import { auth, provider } from "../config/firebase";
import { actionTypes } from "../datalayer/reducer";

const Login = props => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
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