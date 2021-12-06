import { useCallback, useMemo, useRef, useState } from 'react'

export default function UMM(){
    const [name,setName] = useState('');
    const [price, setPrice] = useState('');
    const [props, setProps] = useState([]);
    const nameRef = useRef();
    
    const handleCreat = () => {
        setProps([...props, {
            name,
            price: +price
        }])
        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    const total = useMemo(() => {
        return props.reduce((res, cur) => {
            console.log('re-caculate...');
            return res + cur.price;
        },0)
    },[props])
    
    return (
        <>
            <input 
                autoFocus
                ref={nameRef}
                placeholder="Enter name..."
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input 
                placeholder="Enter price..."
                value={price}
                onChange={e => setPrice(e.target.value)}
                onKeyUp={e => (e.keyCode === 13 && handleCreat())}
            />
            <br />
            <button onClick = {handleCreat}>Add</button>
            <br />
            Total: {total}
            <ul>
                {
                    props.map((item, index) => (
                        <li key={index}>{item.name} - {item.price}</li>
                    ))
                }
            </ul>
        </>
    )
}