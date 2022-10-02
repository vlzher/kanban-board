import React from 'react';
import "../styles/header.scss"
import CustomButton from "./CustomButton";
import {useActions} from "../hooks/useActions";
const Header = ({buttonFunc}) => {
    const {deleteTaskByIndex} = useActions()
    function onDropHandle(e) {
        deleteTaskByIndex(e.dataTransfer.getData("listID"),e.dataTransfer.getData("taskID"))
        e.target.style.background="url(https://i.imgur.com/F9dtJea.png) no-repeat top left"
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background="url(https://i.imgur.com/n7999l6.png) no-repeat top left"

    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        e.target.style.background="url(https://i.imgur.com/F9dtJea.png) no-repeat top left"
    }

    function dragEndHandler(e) {
        e.preventDefault()
        e.target.style.background="url(https://i.imgur.com/F9dtJea.png) no-repeat top left"
    }

    return (
        <div className="header">
            <CustomButton txt="ADD TASK"  onClick={() => buttonFunc(true)}/>
            <div className="headerText">KANBAN BOARD</div>
            <div className="drag__remove__zone__container">
                <div className="drag__remove__zone"
                     onDrop={(e) => onDropHandle(e)}
                     onDragOver={(e) => dragOverHandler(e)}
                     onDragLeave={(e) => dragLeaveHandler(e)}
                     onDragEnd={(e) => dragEndHandler(e)}
                ></div>
            </div>


        </div>
    );
};

export default Header;