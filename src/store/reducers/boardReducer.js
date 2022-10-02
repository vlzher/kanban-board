import {boardActions} from "../action-creator/board";

const initialState =
    [
        {txt: "TODO", style:{marginRight:120}, tasks:[]},
        {txt: "DOING", style:{margin:0}, tasks:[]},
        {txt: "DONE", style:{marginLeft:120}, tasks:[]},
    ]
export const boardReducer = (state = initialState, action) => {
    const newState = [...state]
    switch (action.type){
        case boardActions.ADD_TASK:
            newState[action.payload.id].tasks.push(action.payload.task)
            return newState
        case boardActions.ADD_TASK_INDEX:
            newState[action.payload.boardIndex].tasks
                .splice(action.payload.taskIndex,0,action.payload.task)
            return newState
        case boardActions.DELETE_TASK_INDEX:
                newState[action.payload.boardIndex].tasks
                    .splice(action.payload.taskIndex, 1)
            return newState
    }
    return state
}