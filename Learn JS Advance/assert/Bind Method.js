// Method required Object of method
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function csl(data){
    console.log(data);
}

// EXP
// this.fullname = 'Ta Quang Toan';

// const student = {
//     fullname: 'Tona Ta',
//     getFullname(data1, data2){
//         csl(`${data1} ${data2}`);
//         return `${this.fullname}`;
//     }
// }

// let studentFullname = student.getFullname;
//studentFullname is inherited method of student

// csl(student.getFullname()); // => Tona Ta
// csl(studentFullname()); // => Ta Quang Toan
// when call method without object 'this' will operator to OBJ closest

// To solve this problem Fn.bind was created

// bind can accept value of function to const this value of function
// studentFullname = student.getFullname.bind(student,'Test 1','Test 2');
// csl(studentFullname('test 3', 'test 4')); // => Tona Ta
// not only required Object but also required data of method but if this data is not hard, u should not define it in bind

const app = (() => {
    const cars = ['BMW'],
        root = $('.root'),
        addBtn = $('.addBtn'),
        input = $('.input');

    return {
        add(car){
            cars.push(car);
        },
        delete(index){
            cars.splice(index, 1);
        },
        render(){
            let htmls = cars.map((car, index) => {
                return `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
                `
            }).join('');

            root.innerHTML = htmls;
        },
        handelDeletecar(e){
            const deleteBtn = e.target.closest('.delete');
            if(!!deleteBtn){
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
        },
        init(){
            addBtn.onclick = () => {
                let car = input.value;
                this.add(car);
                input.value = null;
                input.focus();
                this.render();
            }

            root.onclick = this.handelDeletecar.bind(this);

            this.render();
        }
    }
})()

app.init();