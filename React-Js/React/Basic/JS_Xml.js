const progress = [
    {
        name: 'Ta Quang Toan',
        age: 19
    },
    {
        name: 'Ta Quang Toan',
        age: 20
    },
    {
        name: 'Ta Quang Toan',
        age: 21
    },
    {
        name: 'Ta Quang Toan',
        age: 22
    },
    {
        name: 'Successfull!',
        age: 22
    }
];

const ulist = ( 
    <ul>
        {progress.map((item, index) => 
            <li key={index}>
                <h2>{item.name}</h2>
                <p style={{fontSize: '20px',
                            color: 'red'}}>{item.age}</p>
            </li>
        )}
    </ul> 
)

// when render an Obj Array,  each prop need diffent key

const jsx = (
    <React.Fragment>
        <h1>heading1</h1>
        <h2>heading2</h2>
    </React.Fragment>
)

// want render 2 element in one value, you need had an Element wrap them 

const root1 = document.createElement('div');
root1.className = "root1";
document.body.appendChild(root1);

ReactDOM.render(ulist, document.querySelector('.root'));
ReactDOM.render(jsx, document.querySelector('.root1'));