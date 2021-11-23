let ulReact = React.createElement(
    'ul',
    {className: 'list'},
    React.createElement('li', null, 'Learn React JS', ' Ta Quang Toan'),
    React.createElement('li', null, 'Try Hard!', ' Tona Ta')
)

let root = document.querySelector('.root');

ReactDOM.render(ulReact, root);

let root1 = document.createElement('div');
root1.className = 'root1';

let Slogan = React.createElement(
    'div', 
    {className: 'Slogan'},
    React.createElement('h1', null, 'No Pain No Gain!'),
    React.createElement('p', null, 'Ta Quang Toan')
)

document.body.appendChild(root1);

ReactDOM.render(Slogan, root1);