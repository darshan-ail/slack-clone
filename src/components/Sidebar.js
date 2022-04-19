import { Create, FiberManualRecordRounded } from "@material-ui/icons";
import React from "react";
import style from "../styles/sidebar.module.css";

const Sidebar = props => {
    return (
        <div className={style.sidebar}>
            <div className={style.header}>
                <div className={style.sidebarInfo}>
                    <h2>Organization</h2>
                    <h3>
                        <FiberManualRecordRounded />
                        Darshan Ail
                    </h3>
                </div>
                <Create className={style.pencilIcon} />
            </div>
        </div>
    )
}

export default Sidebar;