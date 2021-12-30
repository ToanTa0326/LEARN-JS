import Heading from './cssModule/Heading/Heading'
import Paragraph from './cssModule/Paragraph/Paragraph'
import GlobalCss from './cssModule/GlobalCss/GlobalCss'

export default function CssModule() {
    return (
        <GlobalCss>
            <div className="d-flex">
                <Heading />
                <Paragraph />
            </div>
        </GlobalCss>
    )
}
