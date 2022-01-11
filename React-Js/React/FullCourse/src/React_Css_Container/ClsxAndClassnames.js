import Button from "./ClsxAndClassnames/Button";
import GlobalCss from "./ClsxAndClassnames/GlobalCss/GlobalCss";

export default function ClsxAndClassnames() {
    return (
        <GlobalCss>
            <div className="d-flex">
                <Button />
                <Button primary/>
                <Button active/>
            </div>
        </GlobalCss>
    )
}
