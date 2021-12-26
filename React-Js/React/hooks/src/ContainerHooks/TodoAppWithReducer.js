import { useReducer, useRef } from "react";

export default function TodoAppWithReducer() {
    const initialState = {
        job: '',
        jobs: []
    }

    const set_job = "setJob",
        add_job = "addJob",
        delete_job = "deleteJob";

    const inputRef = useRef()

    const reducer = (state, action) => {
        switch (action.type) {
            case set_job:
                return {
                    ...state,
                    job: action.payload
                }
            case add_job:
                return {
                    ...state,
                    jobs: [...state.jobs, action.payload]
                }
            case delete_job:
                const newJobs = state.jobs.filter((job) => job !== state.jobs[action.payload])
                return {
                    ...state,
                    jobs: newJobs
                }
            default:
                throw new Error('invalid action');
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function setJob(payload){
        return {
            type: set_job,
            payload
        }
    }
    
    function addJob(payload){
        return {
            type: add_job,
            payload
        }
    }

    function deleteJob(payload){
        return {
            type: delete_job,
            payload
        }
    }

    function handleSub(){
        dispatch(addJob(inputRef.current.value));
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
                onChange={e => dispatch(setJob(e.target.value))}
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
