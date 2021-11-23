function app(){
    const cars = [];

    function html([first, ...string], ...values){
        return values.reduce((res, cur) => res.concat(cur, string.shift())
            ,[first]
        )
        .filter(x => x && x !== true || x === 0)
        .join('\n')
    }

    function render(){
        let htmls = cars.map(car => {
            return html`
                <li>
                    <h2>${car.name}</h2>
                    <P>${car.cost}</P>
                </li>
            `
        }).join('')

        let list = document.querySelector('.root');
        list.innerHTML = htmls;
    }

    let addBtn = document.querySelector('.addBtn');
    addBtn.onclick = function(){
        let data = {
            name: document.querySelector('input[name="nameCar"]').value,
            cost: document.querySelector('input[name="cost"]').value
        }
        
        cars.push(data);
        render()
    }
}

function csl(d){
    console.log(d)
}

const teacher = {
    name: 'Minh Thu',
    age: 19,
    getName(){
        console.log([...arguments]);
        csl(this.name)
    }
}

const student = {
    name: 'Ta Quang Toan',
    age: 19
}

teacher.getName.apply(student, ['Ta Quang Toan', 'Nguyen Trung Tuan', 'Nguyen Manh Quoc']);

app();