import { AddOutlined, AppsSharp, BookmarkBorderSharp, Create, DraftsSharp, ExpandLessSharp, ExpandMoreSharp, FiberManualRecordRounded, FileCopySharp, InboxSharp, PeopleAltSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import style from "../styles/sidebar.module.css";
import InsertCommentSharp from "@material-ui/icons/InsertCommentSharp";
import SidebarOptions from "./SidebarOptions";
import db from "../config/firebase";

const Sidebar = props => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            })))
        });
    }, []);

    return (
        <div className={style.sidebar}>
            <div className={style.header}>
                <div className={style.sidebarInfo}>
                    <h2>Organization</h2>
                    <h3>
                        <FiberManualRecordRounded className={style.onlineIcon} />
                        Darshan Ail
                    </h3>
                </div>
                <Create className={style.pencilIcon} />
            </div>
            <SidebarOptions Icon={InsertCommentSharp} title="Threads" />
            <SidebarOptions Icon={InboxSharp} title="Mentions & reactions" />
            <SidebarOptions Icon={DraftsSharp} title="Saved items" />
            <SidebarOptions Icon={BookmarkBorderSharp} title="Channel browser" />
            <SidebarOptions Icon={PeopleAltSharp} title="People & user groups" />
            <SidebarOptions Icon={AppsSharp} title="Apps" />
            <SidebarOptions Icon={FileCopySharp} title="File browser" />
            <SidebarOptions Icon={ExpandLessSharp} title="Show less" />
            <hr />
            <SidebarOptions Icon={ExpandMoreSharp} title="Channel" />
            <hr />
            <SidebarOptions Icon={AddOutlined} title="Add Channel" />
            {channels.map(channel => (
                <SidebarOptions id={channel.id} title={channel.name} />
            ))}
        </div>
    )
}

export default Sidebar;