import {useState} from 'react'
import React from 'react'

export default function US(){
    const [value, setValue] = useState('');
    const [users, setUser] = useState(() => {
        const userstorage = JSON.parse(localStorage.getItem('users'));

        return userstorage ?? [];
    });

    function handleSet(){
        setUser(users => {
            let newUsers = [...users, value];

            if(value.toLocaleLowerCase() === "clear") newUsers = []

            localStorage.setItem('users', JSON.stringify(newUsers));

            return newUsers;
        })
        setValue('');
    }

    return (
        <React.Fragment>
            <input 
                value = {value}
                onChange={(e) => setValue(e.target.value)}/>
            <button onClick={handleSet}>Add</button>
            <ul>
                {users.map(((user,id) => 
                    <li key={id}>{user}</li>))}
            </ul>
        </React.Fragment>
    )
}