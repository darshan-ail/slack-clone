import React from "react";
import style from "../styles/header.module.css";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import { useStateValue } from "../datalayer/StateProvider";

const Header = props => {
    const [{ user }] = useStateValue();

    return (
        <div className={style.header}>
            <div className={style.headerLeft} >
                <Avatar className={style.avatar} alt={user?.displayName} src={user?.photoURL} />
                <AccessTime style={{ marginLeft: "auto", marginRight: "30px" }} />
            </div>
            <div className={style.headerSearch}>
                <Search />
                <input placeholder="Search something here..." />
            </div>
            <div className={style.headerRight}>
                <HelpOutline style={{ marginLeft: "auto", marginRight: "20px" }} />
            </div>
        </div>
    )
}

export default Header;