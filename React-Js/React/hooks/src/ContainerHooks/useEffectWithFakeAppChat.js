import { useEffect, useState } from "react";

export default function UEWFAC(){
    const [lessonId, setlessonId] = useState(null)
    const [mounted, setMounted] = useState(false)
    const lessons = [
        {
            id: 1,
            name: 'lesson 1'
        },
        {
            id: 2,
            name: 'lesson 2'
        },
        {
            id: 3,
            name: 'lesson 3'
        }
    ]

    useEffect(() => {
        const handleComments = (e) => {
            console.log(e.detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComments)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComments)
        }   
    },[lessonId])

    return (
        <>
            <button onClick={() => {
                setMounted(!mounted)
                if(!mounted === true) setlessonId(1)
                else setlessonId(null)
            }}>Toggle</button>
            {mounted && (
                <ul>
                    {lessons.map((item) => (
                        <li 
                            key = {item.id}
                            style={{
                                color: lessonId===item.id? 'red':'#000',
                                fontSize: '30px'
                            }}
                            onClick={() => setlessonId(item.id)}
                        >{item.name}</li>
                    ))}
                </ul>
            )}
        </>
    )
}