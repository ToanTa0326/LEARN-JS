import { useRef } from "react";
import Video from "./useImperativeHandle/Video";

export default function UseImperativeHandle() {
    const videoRef = useRef();
    
    function handlePlay(){
        videoRef.current.Play();
    }
    
    function handlePause(){
        videoRef.current.Pause();
    }

    return (
        <div>
            <Video ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}
