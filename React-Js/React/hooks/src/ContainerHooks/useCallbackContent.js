import { memo } from "react";

function UCBContent({onIncrease}){
    console.log('re-render');
    return(
        <>
            <h1>Hí Anh Em</h1>
            <button onClick={onIncrease}>count1</button>
        </>
    )
}

export default memo(UCBContent);