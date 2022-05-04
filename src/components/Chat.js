import React from "react";
import style from "../styles/chat.module.css"
import { useParams } from "react-router-dom";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";

const Chat = props => {
    const { roomId } = useParams();
    return (
        <div className={style.chat}>
            <div className={style.chatHeader}>
                <div className={style.chatHeaderLeft}>
                    <h4 className={style.channelName}>
                        <strong># general</strong>
                        <StarBorderOutlined className={style.starIcon} />
                    </h4>
                </div>
                <div className={style.chatHeaderRight}>
                    <p>
                        <InfoOutlined className={style.infoIcon} /> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat;