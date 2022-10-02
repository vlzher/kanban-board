export const boardActions = {
    DELETE_TASK_INDEX: "DELETE_TASK_INDEX",
    ADD_TASK_INDEX: "ADD_TASK_INDEX",
    ADD_TASK: "ADD_TASK"
}
export const deleteTaskByIndex = (boardIndex, taskIndex) => {
    return (dispatch) => {
        dispatch({type: boardActions.DELETE_TASK_INDEX, payload:{boardIndex,taskIndex}})
    }
}
export const addTask = (id,task) => {
    return (dispatch) => {
        dispatch({type: boardActions.ADD_TASK, payload:{id,task}})
    }
}
export const addTaskByIndex = (boardIndex, taskIndex, task) => {
    return (dispatch) => {
        dispatch({type: boardActions.ADD_TASK_INDEX, payload:{boardIndex,taskIndex,task}})
    }
}