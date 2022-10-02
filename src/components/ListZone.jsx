import React, {useState} from 'react';
import List from "./List";
import "../styles/list-zone.scss"
import {useSelector} from "react-redux";
const ListZone = () => {
    const lists = useSelector(state => state.board)

    return (
        <div className="list-zone">
            {
                lists.map((list,index) => <List key={index} id={index} txt={list.txt} style={list.style} tasks={list.tasks}/>)
            }
        </div>
    );
};

export default ListZone;