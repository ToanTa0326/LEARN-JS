import { useContext } from "react"
import Paragraph from "./Paragraph"
import { ThemeContext } from "./ThemeProvider"

export default function Content() {

    const context = useContext(ThemeContext);

    return (
        <div>
            <button
                onClick={context.toggleTheme}
            >Toggle theme</button>
            <Paragraph />
        </div>
    )
}
