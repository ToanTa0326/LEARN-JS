/*
    when global state update, all Children component will be re-rendered
    So if global state of application is complex, you should use Redux replace Context
*/
import Content from "./useContext/Content";
import { ThemeProvider } from "./useContext/ThemeProvider";

export default function ContextApp() {
    return (
        <ThemeProvider>
            <div style={{padding: '20px'}}>
                <Content />
            </div>
        </ThemeProvider>
    )
}
