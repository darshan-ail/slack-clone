import React from "react";
import style from "../styles/header.module.css";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";

const Header = props => {
    return (
        <div className={style.header}>
            <div className={style.headerLeft} >
                <Avatar className={style.avatar} alt="user image" src="" />
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