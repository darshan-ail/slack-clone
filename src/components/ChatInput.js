import React, { useState } from "react";
import styles from "../styles/chatInput.module.css";
import db from "../config/firebase";
// import firebase from "firebase/compat";
import { useStateValue } from "../datalayer/StateProvider";

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = event => {
        event.preventDefault();
        if (channelId) {
            db.collection('rooms')
                .doc(channelId)
                .collection('messages')
                .add({
                    message: input,
                    timestamp: new Date(),
                    user: user.displayName,
                    userImage: user.photoURL,
                })
        }
    }

    return (
        <div className={styles.chatInput}>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput;