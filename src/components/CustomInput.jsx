import React from 'react';
import "../styles/custom-input.scss"
const CustomInput = ({value, onChange}) => {
    return (
        <input value={value} className="custom__input" onChange={onChange} type="text"/>
    );
};

export default CustomInput;