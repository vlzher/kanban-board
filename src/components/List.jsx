import React from 'react';
import "../styles/list.scss"
import Task from "./Task";
import {useActions} from "../hooks/useActions";
const List = ({style,txt,tasks,id}) => {
    const {addTask, deleteTaskByIndex} = useActions()
    function onDropHandle(e) {
        e.preventDefault()
        if(e.target.className === "list-lower"){
            addTask(id,e.dataTransfer.getData("txt"))
            deleteTaskByIndex(e.dataTransfer.getData("listID"),e.dataTransfer.getData("taskID"))
        }


    }

    function dragOverHandler(e) {
        e.preventDefault()
    }

    return (
        <div className="list" style={style}>
            <div className="list-upper">
                <div className="list-text" >
                    {txt}
                </div>
            </div>
            <div className="list-lower"
                 id={id}
                 onDrop={(e) => onDropHandle(e)}
                 onDragOver={(e) => dragOverHandler(e)}

            >
                {
                    tasks.map((task,index) => <Task listID ={id} taskID={index} key={index} txt={task}/>)
                }
                    </div>
        </div>
    );
};

export default List;