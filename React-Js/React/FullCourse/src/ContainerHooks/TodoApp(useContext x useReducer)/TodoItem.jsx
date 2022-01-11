import { useEffect, useRef, useState } from "react";
import { deleteTodo, editTodo, setEdit, useData } from "."

export default function TodoItem({index, children}) {
    const [{editing}, dispatch] = useData();
    const [editValue, setEditValue] = useState(children);

    const todoRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        const handleEdit = () => {
            dispatch(setEdit(index));
            inputRef.current.focus();
        }

        todoRef.current.addEventListener("dblclick", handleEdit)
        return () => {
            todoRef.current?.removeEventListener("dblclick", handleEdit)
        }
    },[])

    const handleEditTodo = () => {
        if(editValue.trim() !== ""){
            dispatch(editTodo(editValue))
        }
        else{
            dispatch(deleteTodo(index))
        }
        dispatch(setEdit(null))
    }

    function handleCancel() {
        dispatch(setEdit(null));
    }

    return (
        <li>
            <div
                className={index === editing? "editing" : ""}
                style={{minWidth: '200px', display: 'inline-block'}}
            >
                <span 
                    className="todo"
                    ref={todoRef} 
                >
                    {children}
                </span>
                <input
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={e => e.keyCode === 13 && handleEditTodo()}
                    onBlur={() => handleCancel()}
                    value = {editValue}
                    ref={inputRef}
                    className="edit"
                    type="text"
                />
                <span>
                    <button
                        style={{marginLeft: '15px'}}
                        onClick={() => dispatch(deleteTodo(index))}
                    >&times;</button>
                </span>
            </div>
        </li>
    )
}
