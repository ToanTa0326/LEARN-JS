import { add_Todo, delete_Todo, edit_Todo, set_edit, set_Input } from "./constants"

export const setInput = (payload) => {
    return {
        type: set_Input,
        payload
    }
}

export const addTodo = () => {
    return {
        type: add_Todo
    }
}

export const deleteTodo = payload => {
    return {
        type: delete_Todo,
        payload
    }
}

export const setEdit = payload => {
    return {
        type: set_edit,
        payload
    }
}

export const editTodo = payload => {
    return {
        type: edit_Todo,
        payload
    }
}