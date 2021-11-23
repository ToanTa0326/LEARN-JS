// Immediately Invoked Function Express

function csl(data){
    console.log(data);
}

// exp1
// (function(message){
//     csl(`message: ${message}`);
// })('Call Express Function Immediately!');

// creat IIFE by OPERATOR ( ! , + , - , ... )
let i=0
!function callback(){
    if(i>10) return;
    csl(i++);
    callback();
}()
// Operator make function transform to bool data and call func Immediately

// Application
// const app = (function(){
//     // make Object of app Private
//     const cars = []

//     // Public methods of app
//     return {
//         get(index){
//             return cars[index];
//         },
//         add(data){
//             cars.push(data);
//             csl('done!');
//         },
//         edit(index, car){
//             cars[index] = car
//         },
//         delete(index){
//             cars.splice(index, 1);
//             csl('done!');
//         }
//     }
// })()