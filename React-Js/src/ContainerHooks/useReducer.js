import {useReducer} from 'react';

export default function UseReducer() {
    const initialState = 0;
    
    const actions = ["Up_Action", "Down_Action"];
    
    const reducer = (state, action) => {
        return (action === actions[0])? ++state : --state;
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch(actions[0])}>Up</button>
            <button onClick={() => dispatch(actions[1])}>Down</button>
        </div>
    )
}
