import { useState, useEffect } from "react";
import React from "react";

// 1. useEffect(callback);
//     - gọi callback mỗi khi component được re-render
//     -> khi call API mà không có giá trị khởi tạo trong useEffect thì sẽ bị call vô hạn sau khi re-render component

// 2. useEffect(callback, [])
//     - Gọi callback đúng 1 lần sau khi component được render lần đầu tiên

// 3. useEffect(callback, [dependences])
//     -> Gọi callback mỗi khi dependences thay đổi

//-------------
// Callback luôn được gọi sau khi component được mounted
// Clean up function luôn được gọi trước khi component bị unmounted
// Clean up function luôn được gọi trước khi callback được gọi (except the first mounted)

export default function UE(){
    const tabs = ['posts', 'comments', 'users', 'albums', 'photos', 'todos'];
    const [Time, setTime] = useState(180);
    const [mounted, setMounted] =  useState(false);
    const [type, setType] = useState('posts');
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [goToTop, setGoToTop] = useState(false);

    // 1 - no dependence
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then((data) => setData(data))
    // })

    // 2 - have empty dependence
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/comments")
    //         .then(res => res.json())
    //         .then((data) => setData(data))
    // }, [])
    
    // 3 - have dependence
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then((data) => setData(data))
    }, [type]) 
    //when dependence change callback will call again an when callback called useState's setData called and re-render Component

    // 4 - UseEffect with DOM events
    useEffect(() => {
        const handleScroll = function(){
            if(window.scrollY >= 200) setGoToTop(true)
            else setGoToTop(false)
        }

        window.addEventListener('scroll', handleScroll)

        // clean up function when Component unmounted to prevent the leak of memory
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    // 5 - UseEffect with Timer function
    useEffect(() => {
        const timer = setInterval(() => {
                setTime(prev => prev - 1)
        }, 1000);

        // const timeout = setTimeout(() => {
        //     setTime(Time - 1)
        // }, 1000);

        return () => clearInterval(timer)
    },[])

    if(title) document.title = title;

    function Title(){
        return (
            <React.Fragment>
                <div><h1>{Time}</h1></div> 
                <div>
                    <input value={title} 
                        autoFocus={window.scrollY < 10}
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div>
                    {tabs.map(tab => (
                        <button
                            style={tab === type? {color: '#fff', backgroundColor: '#000'} : {}}
                            key = {tab}
                            onClick={() => setType(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <ul>
                    {data.map(item => 
                        <li key = {item.id}>{item.name || item.title}</li>)}
                </ul>
            </React.Fragment>
        )
    }

    function GoToTop(){
        return (
            <button
                style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px'
                }}
                onClick={() => window.scrollTo(0,0)}
            >
                GoToTop
            </button>
        )
    }
    
    return (
        <React.Fragment>
            <button onClick={() => setMounted(!mounted)}>Toggle</button>
            {mounted && <Title />}
            {goToTop && <GoToTop />}
        </React.Fragment>
    )
}