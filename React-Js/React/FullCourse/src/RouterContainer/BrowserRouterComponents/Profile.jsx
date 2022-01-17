import { useParams } from "react-router-dom"

export default function Profile() {
    const { username } = useParams()
    return (
        <h1 className="heading">
            This is Profile Page For ~ { username }      
        </h1>
    )
}
