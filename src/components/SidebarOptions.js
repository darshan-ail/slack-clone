import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "../styles/sidebarOptions.module.css";

const SidebarOptions = ({ Icon, title, id, addChannelOption }) => {
    let navigate = useNavigate();
    const selectChannel = () => {
        if (id) {
            navigate(`/room/${id}`);
        } else {
            <Link to={title} />
        }
    }

    const addChannel = () => {
        if (id) {
            <Link to="/expenses">Expenses</Link>
        }
    }

    return (
        <div className={style.sidebarOptions} onClick={addChannelOption ? addChannel : selectChannel}>
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