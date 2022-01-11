import { useState } from "react";

const EnhancedComponent = (OriginalComponent) => {
    const NewComponent = () => {
        const [state, setstate] = useState(0);

        const handleClick = () => {
            setstate(state+1)
        }
        return (
            <OriginalComponent 
                handleClick = {handleClick}
                show = {state}
            />
        )
    }
    // Returns the new component
    return NewComponent 
}
// Export main Component
export default EnhancedComponent 
