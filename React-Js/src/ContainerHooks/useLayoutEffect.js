import React, { useEffect, useLayoutEffect, useState } from "react"

/* 
    UseEffect:
    - reset state
    - reset DOM (mutated)
    - Rerender UI
    - call CleanUp function if depens change (async)
    - call useEffect callback (async)

    UseLayoutEffect:
    - reset state
    - reset DOM (mutated)
    - call CLeanUp function if depens change (sync)
    - call useLayoutEffect callback (sync)
    - Rerender UI
*/

export default function ULE(){

    const [count, setCount] = useState(0);
    const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //     if(count > 9) setCount(0);
    // }, [count])

    useLayoutEffect(() => {
        if(count > 9) setCount(0);
    }, [count])

    function CountLayout(){
        const handleCount = () => {
            setCount(count+1);
        }

        return (
            <div>
                <h1>{count}</h1>
                <button onClick={handleCount}>Run</button>
            </div>
        )
    }

    return (
        <div>
            <button onClick={() => setMounted(!mounted)}>Toggle</button>
            {mounted && <CountLayout />}
        </div>
    )
}

