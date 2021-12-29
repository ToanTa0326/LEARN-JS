/* 
    createContext to creat new Context which includes Provider Component and Consumer component
    - Provider Component will pass data through the component tree of Children component without passing props manually at every level
        Children will get data by useContext(Context) to get data
    - Consumer Component will pass data to children Component
*/
import { useState, createContext } from "react";

const ThemeContext = createContext()

function ThemeProvider({children}) {
    
    const [theme, setTheme] = useState('light');

    function toggleTheme(){
        setTheme(theme === 'light'? 'dark' : 'light')
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext, ThemeProvider}