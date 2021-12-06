import { useCallback, useState } from 'react'
import UCBContent from './useCallbackContent'

/*
    if not use UseCallback, every re-render UCB will creat new hadleCount funtion the same prev with new reference
    So despite of same function, diffent reference so coponent will re-render unexpected
    dependences of useCallback same useEffect
    when depens changed, useCallback will creat new function with new reference
*/

export default function UCB(){
    const [count, setCount] = useState(0);

    const handleCount = useCallback(() => {
        setCount(count => count+1);
    },[]) 
    
    return (
        <>
            <UCBContent onIncrease={handleCount}/>
            <h1>{count}</h1>
        </>
    )
}