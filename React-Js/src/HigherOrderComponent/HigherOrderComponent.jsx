import EnhancedComponent from "./EnhancedComoponent";

const HigherOrderComponent = ({show, handleClick}) => {
    return (
        <button 
            onClick={handleClick}
        >
            {show}
        </button>
    )
}
export default EnhancedComponent(HigherOrderComponent);