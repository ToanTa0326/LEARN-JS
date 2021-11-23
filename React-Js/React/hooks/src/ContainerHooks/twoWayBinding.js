import { useState } from "react";
import React from "react";

const courses = [
    {
        id: 1,
        name: 'Learn JS Basic'
    },
    {
        id: 2,
        name: 'Learn JS Advanced'
    },
    {
        id: 3,
        name: 'Learn React JS'
    }
]

export default function TwoWayBinding(){
    let [checked, setChecked] = useState([])
    
    function changeDefault(){
        setChecked([])
    }

    function handleSetChecked(id){
        const isChecked = checked.includes(id);
        if(isChecked){
            checked = checked.filter(item => item !== id);
            return checked;
        }
        return [...checked, id];
    }

    return(
        <React.Fragment>
            {
                courses.map((item, index) => 
                    <div key = {index}>
                        <input 
                            type={"checkbox"} 
                            className={`course + ${index}`} 
                            checked={checked.includes(item.id)} 
                            onChange={() => setChecked(handleSetChecked(item.id))}
                        />{item.name}
                    </div>)
            }
            <button onClick={changeDefault}>Default</button>
        </React.Fragment>
    )
}