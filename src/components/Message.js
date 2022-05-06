import React from "react";
import style from "../styles/message.module.css";

const Message = ({ message, timestamp, user, userImage }) => {
    return (
        <div className={style.message}>
            <img src={userImage} alt="" />
            <div className={style.info} >
                <h4>
                    {user} timestamp...
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;