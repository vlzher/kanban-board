import React from 'react';
import "../styles/custom-button.scss"
const CustomButton = ({txt, onClick, style}) => {
    return (
        <button className="button-task" style={style} onClick={onClick}>{txt}</button>
    );
};

export default CustomButton;