'use strict';

function csl(data){
    console.log(data);
}

// EXP forgot call key defined value
// fullname = 'Ta Quang Toan';

// function test(){
//     // "use strict";
//     age =18;
// }

// test();     // => when call function age will be a global value

// csl(fullname);
// csl(age);

// EXP fix value has writable: false property

// var obj = Object.freeze({
//     fullname: 'Ta Quang Toan',
// })

// obj.fullname = 'Toan Ta';

// csl(obj.fullname);

// ------------------------
// const student = {};

// Object.defineProperty(student, 'fullname',{
//     value: 'Ta Quang Toan'
// })

// student.fullname = 'Toan Ta';
// csl(student);

// Err when fucntion has values has the same name
// function sum( a, a ){
//     return a+a;
// }

// ERR when delclare function in code block called out scope of code block

// {
//     function sum(a, b){
//         return a+b;
//     }
// }

// csl(sum(6,9));