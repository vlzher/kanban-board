import React from 'react';
import "../styles/task.scss"
import {useActions} from "../hooks/useActions";
const Task = ({txt, listID, taskID}) => {
    const {addTaskByIndex,deleteTaskByIndex} = useActions()
    const style = {}
    switch (listID){
        case 0:
            style.color = "red"
            break;
        case 1:
            style.color = "orange"
            break;
        case 2:
            style.color = "green"
            break;
    }
    function dragOverHandler(e) {
        e.preventDefault()
        if(e.target.className==="task"){
            e.target.style.borderColor="blue"
        }

    }

    function dragLeaveHandler(e) {
        if(e.target.className==="task") {
            e.target.style.borderColor = 'black'
        }
    }

    function dragStartHandler(e) {
        e.dataTransfer.setData("taskID",taskID)
        e.dataTransfer.setData("listID",listID)
        e.dataTransfer.setData("txt",txt)
    }

    function dragEndHandler(e) {
        if(e.target.className==="task") {
            e.target.style.borderColor = 'black'
        }
    }

    function dropHandler(e) {
        e.preventDefault()
        if(e.target.className==="task") {
            e.target.style.borderColor = 'black'
            deleteTaskByIndex(e.dataTransfer.getData("listID"),e.dataTransfer.getData("taskID"))
            addTaskByIndex(listID,taskID,e.dataTransfer.getData("txt"))
        }


    }

    return (
        <div className="task"
             style={style}
             draggable={true}
             onDragOver={(e) => dragOverHandler(e)}
             onDragLeave={(e) => dragLeaveHandler(e)}
             onDragStart={(e) => dragStartHandler(e)}
             onDragEnd={(e) => dragEndHandler(e)}
             onDrop={(e) => dropHandler(e)}
        >
            {txt}
        </div>
    );
};

export default Task;