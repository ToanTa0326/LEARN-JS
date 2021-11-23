function Header(){
    return (
        <div className="Header">New Header</div>
    )
}

class Content extends React.Component{
    render(){
        return (
            <div className="Content">New Content</div>
        )
    }
}

const app = (
    <div style={{fontSize: "30px"}} className={"body"}>
        <Header />
        <Content />
        <div className = "footer">New Footer</div>
    </div>
)

ReactDOM.render(app,document.querySelector('.root'))