import { useState } from "react"
import React from "react"

export default function MUM(){
    const [mounted, setMounted] =  useState(false);

    function Title(){
        return <h1>Hí Anh Em</h1> 
    }

    return (
        <React.Fragment>
            <button onClick={() => setMounted(!mounted)}>Toggle</button>
            {mounted && <Title />}
        </React.Fragment>
    )
}