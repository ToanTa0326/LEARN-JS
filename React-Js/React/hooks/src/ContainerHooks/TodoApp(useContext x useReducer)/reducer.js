import { add_Todo, delete_Todo, edit_Todo, set_edit, set_Input } from "./constants";

const initialState = {
    todos: [],
    todoInput: '',
    editing: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case set_Input:
            return {
                ...state,
                todoInput: action.payload
            }
        case add_Todo:
            return {
                ...state,
                todos: [...state.todos, state.todoInput]
            }
        case delete_Todo:
            return{
                ...state,
                todos: state.todos.filter(todo => todo !== state.todos[action.payload])
            }
        case set_edit:
            return {
                ...state,
                editing: action.payload
            }
        case edit_Todo:
            state.todos[state.editing] = action.payload;
            return state;
        default:
            throw new Error('Invalid Action!');
    }
}

export { initialState };
export default reducer;