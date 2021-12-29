import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './video1.mp4'

function Video(props, ref) {
    const videoRef = useRef();
    
    useImperativeHandle(
        ref,
        () => ({
            Play(){
                videoRef.current.play()
            },
            Pause(){
                videoRef.current.pause()
            }
        })
    )
    
    return (
        <video 
            ref={videoRef}
            src={video1}
            style={{width: '280px'}}
        />
    )
}
export default forwardRef(Video)