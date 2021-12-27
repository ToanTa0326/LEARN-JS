import { useReducer, useRef } from "react";
import { setJob, addJob, deleteJob } from "./dispatch"
import { reducer } from "./reducer";
export default function TodoAppWithReducer() {
    const initialState = {
        job: '',
        jobs: []
    }
    
    const inputRef = useRef()
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    function handleSub(){
        dispatch(addJob(state.job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input 
                ref={inputRef}
                placeholder='enter job...'
                value={state.job}
                onChange={() => dispatch(setJob(inputRef.current.value))}
            />
            <button
                onClick={() => handleSub()}
            > Add </button>
            <ul>
                {state.jobs && state.jobs.map((job, index) => 
                    <li key={index}>
                        {job}
                        <span onClick = {() => dispatch(deleteJob(index))}>&times;</span>
                    </li>)
                }
            </ul>
        </div>
    )
}
