const h1 = document.createElement('h1'),
    root = document.querySelector('.root');

h1.innerHTML = 'Hello World';
h1.id = 'test1';
h1.className = 'Test2';
Object.assign(h1.style, {
    color: 'lightblue',
    fontSize: '30px',
    backgroundColor: '#000',
    display: 'inline-block'
})

root.appendChild(h1);