import { useNavigate } from "react-router-dom"

export default function About() {
    //get navigate funtion with props include: to Page's path and option for this
    //useNavigate returns an imperative method for changing the location. Used by s, but may also be used by other elements to change the location.
    const navigate = useNavigate();
    
    return (
        <div className="heading">
            <h1>
                This is About Page...{" "}          
            </h1>
            <button style={{width: '100px', height: '50px'}} onClick={() => navigate('/Home')}>Back to Home Page</button>
        </div>
    )
}
