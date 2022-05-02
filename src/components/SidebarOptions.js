import React from "react";
import style from "../styles/sidebarOptions.module.css";

const SidebarOptions = ({ Icon, title }) => {
    return (
        <div className={style.sidebarOptions}>
            {Icon && <Icon className={style.sidebarOptionsIcon} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className={style.channel}>
                    <span className={style.hash} >#</span>{title}
                </h3>
            )}
        </div>
    )
}

export default SidebarOptions;