import {useState} from 'react'
import React from 'react'

export default function US(){
    const [value, setValue] = useState('');

    let [checked, setChecked] = useState(() => {
        const checkedStorage = JSON.parse(localStorage.getItem('check'))

        return checkedStorage ?? [];
    });

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

    function handleSetChecked(id){
        console.log(id);
        let isChecked = checked.includes(id);
        checked = (isChecked)? checked.filter(item => item !== id) : [...checked, id];
        localStorage.setItem('check', JSON.stringify(checked));
        return checked
    }

    function setDefault(){
        checked = [];
        localStorage.setItem('check', JSON.stringify(checked));
        setChecked(checked);
    }

    return (
        <React.Fragment>
            <p>enter clear to clear all option</p>
            <input 
                value = {value}
                onChange={(e) => setValue(e.target.value)}
                autoFocus
                onKeyDown={(e) => {
                    if(e.keyCode === 13) handleSet()
                }}    
            />
            <button onClick={handleSet}>Add</button>
            <div>
                {users.map(((user,id) => 
                    <div key={id}>
                        <input 
                            type="checkbox"
                            checked={checked.includes(id)}
                            onChange={() => setChecked(handleSetChecked(id))}    
                        />{user}
                    </div>))}
            </div>
            <button onClick={setDefault}>Default</button>
        </React.Fragment>
    )
}