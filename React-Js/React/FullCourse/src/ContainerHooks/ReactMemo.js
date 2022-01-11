import { useState } from "react"
import RMContent from "./ReactMemoContent"

/*
    Memo (HOC) Higher order component
    when one of props passed to component changed (compare by === operator), this component will re-render
    otherwise, not re-render 
*/

export default function MM(){
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const increase1 = () => {
        setCount(count+1);
    }

    const increase2 = () => {
        setCount2(count2+1);
    }

    return (
        <div>
            <RMContent state={count}/> {/* re-render when count is changed */}
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={increase1}>count1</button>
            <button onClick={increase2}>count2</button>
        </div>
    )
}