import { memo } from "react";

function RMContent({state}){
    console.log('re-render');
    return <h1>Hí Anh Em {state}</h1>
}

export default memo(RMContent);