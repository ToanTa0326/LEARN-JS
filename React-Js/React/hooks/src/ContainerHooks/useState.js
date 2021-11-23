import {useState} from 'react'
import React from 'react'

const user = {
    name: 'Ta Quang Toan',
    age: 19,
    Slogan: 'Try To Success!'
}

let count = 1;

export default function US(){
    const [User, setUser] = useState(user)

    function handleUser(){
        setUser({
            ...User,
            mess: `Add Successful! ${+ count? count++ : ''}`
        })
    }

    return (
        <React.Fragment>
            <h1>{JSON.stringify(User)}</h1>
            <button onClick = {handleUser}>Click Me!</button>
        </React.Fragment>
    )
}