import React, {useState} from 'react';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import "../styles/customModal.scss"
import {useActions} from "../hooks/useActions";
const CustomModal = ({modalState, setModalState}) => {
    const {addTask} = useActions()
    const [inputText, setInputText] = useState("");
    function buttonFunc(){
        if(inputText){
            setModalState(false)
            addTask(0,inputText.toUpperCase())
            setInputText("")
        }

    }
    return (
            <Modal active={modalState} setActive={setModalState}>
                <div className="modal__text">
                    TASK MENU
                </div>
                <div className="modal__input">
                    <CustomInput value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
                </div>
                <div className="modal__button">
                    <CustomButton onClick={buttonFunc} txt={"ADD"} style={{"marginLeft":0, "marginRight": 20}}/>
                </div>

            </Modal>
    );
};

export default CustomModal;