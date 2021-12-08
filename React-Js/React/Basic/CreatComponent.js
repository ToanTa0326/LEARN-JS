const App = () => {

    const Form = {
        Input(){
            return <input />
        },
        CheckBox(){
            return <input type = "checkbox" />
        }
    }

    const type = "CheckBox";
    const CheckBoxCpn = Form[type];

    const Button = ({title, href, onClick}) => {
        let Component = 'button'
        const props = {};

        if(href){
            Component = 'a';
            props.href = href;
        }
        if(onClick) props.onClick = onClick
        
        return (
            <Component {...props}>{title || 'No Title'}</Component>
            // React will not render type of value: Boolean, undefined, null, ....
            // so you can use logical operator to render for your requiration
        )
    }

    const cars = ['BMW', 'Roll Royce', 'Ranger Rover'];

    const RenderProps = ({data, children}) => {  //children props must named 'children'
        console.log(data, children);
        return (
            <ul>
                {data.map(children)}
            </ul>
        )
    }

    return (
        <React.Fragment>
            <div className = "wrapper">
                <Form.Input />
                <CheckBoxCpn />
                <Button 
                    title = "Click ME" 
                    href = "https://www.facebook.com/"
                    onClick = {() => console.log(Math.random())}
                />
            </div>
            <RenderProps data = {cars}>
                {(item,index) => <li key = {index}>{item}</li>} 
                {/* Children props */}
            </RenderProps>
        </React.Fragment>
    )
}

// InsertBefore of Node (new Node, Node existing)

const root1 = document.createElement('h1');
root1.className = 'root1';
root1.textContent = 'Day la root1'
const root = document.querySelector('.root');
ReactDOM.render(<App />, root);
root.insertBefore(root1, document.querySelector('.wrapper'))