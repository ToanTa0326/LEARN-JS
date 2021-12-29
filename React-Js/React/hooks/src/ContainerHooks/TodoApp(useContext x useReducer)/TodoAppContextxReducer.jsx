import { useEffect, useRef } from "react";
import { addTodo, setInput, useData } from "./index";
import TodoItem from "./TodoItem";

function TodoAppContextxReducer() {
    
    const [state, dispatch] = useData();
    const {todos, todoInput} = state;
    const inputRef = useRef();
    const btnRef = useRef()

    const handleSub = ()=> {
        if(todoInput.trim() !== ""){
            dispatch(addTodo(todoInput));
            dispatch(setInput(''));
            inputRef.current.focus();
        }
    }
    
    useEffect(() => {
        const handleSubmitKey = (e) => {
            if(e.keyCode === 13) 
                btnRef.current.click();
        }

        inputRef.current.addEventListener("keydown", handleSubmitKey);
        return () => {
            inputRef.current.removeEventListener("keydown", handleSubmitKey);
        }
    }, [])

    return (
        <div>
            <input
                ref={inputRef}
                placeholder="enter todo..."
                value={todoInput}
                onChange={e => dispatch(setInput(e.target.value))}
            />
            <button
                ref={btnRef}
                style={{marginLeft: '15px'}}
                onClick={handleSub}
            >Add</button>
            <ul>
                {todos && todos.map((todo, index) => (
                    <TodoItem key={index} index={index}>
                        {todo}
                    </TodoItem>
                ))}
            </ul>
        </div>
    )
}
export default TodoAppContextxReducer;