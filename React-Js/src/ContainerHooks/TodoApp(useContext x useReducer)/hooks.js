import { useContext } from "react";
import Context from "./Context";

export const useData = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}

export const useMiddleWare = (reducer, ...middleWares) => {
    return (prevState, action) => {
      const newState = reducer(prevState, action);
      for (const middleWare of middleWares) {
        middleWare(prevState,newState,action)
      }
      return newState;
    };
}