import { useEffect, useRef, useState } from "react"

export default function UR (){
    const [state, setState] = useState(60);
    const timerId = useRef();
    const prevState = useRef();
    const h1Ref = useRef()
    
    const start = () => {
        timerId.current = setInterval(() => {
            setState(state => state - 1);
        },1000)

        console.log('start -> ',timerId.current);
    }

    useEffect(() => {
        console.log(prevState.current, state);
        prevState.current = state;
    },[state]);

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect(); //get position of DOM element
        console.log(rect);
    })

    const stop = () => {
        clearInterval(timerId.current);
        console.log('stop -> ',timerId.current);
    }

    return (
        <div>
            <h1 ref={h1Ref}>{state}</h1>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    )
}