import React, { useEffect, useState } from "react";
import Message from "./Message";
import style from "../styles/chat.module.css";
import { useParams } from "react-router-dom";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";
import db from "../config/firebase";

const Chat = props => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState(null);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snap => (
                setRoomDetails(snap.data())
            ))
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((doc) => {
                    console.log(doc, doc.data());
                    if (doc.exists) {
                        setRoomDetails(doc.data());
                    } else {
                        console.log("no such document in firebase");
                    }
                })

            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((doc) => {
                    setRoomMessages(
                        doc.docs.map(doc => doc.data())
                    )
                })
        }
        // console.log("sssss", roomDetails);
        console.log(roomMessages);
    }, [roomId]);

    return (
        <div className={style.chat}>
            <div className={style.chatHeader}>
                <div className={style.chatHeaderLeft}>
                    <h4 className={style.channelName}>
                        <strong>{`# ${roomDetails.name}`}</strong>
                        <StarBorderOutlined className={style.starIcon} />
                    </h4>
                </div>
                <div className={style.chatHeaderRight}>
                    <p>
                        <InfoOutlined className={style.infoIcon} /> Details
                    </p>
                </div>
            </div>
            <div className={style.chatMessgaes}>
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat;