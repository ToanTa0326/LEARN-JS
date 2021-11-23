// When program running it will read your code and get key initial value (var, let, const, function declaration)
// and put it and key of value on the head of Local Scope but not initial it value
// NOTE with Let and Const, it still put on the head but the key and value will be put in 'Temporal Dead Zone'

function csl(data){
    console.log(data);
}

// EXP of var and declare function

// {
//     {
//         csl(age);
//         var age = 18;
//     }
// }

// Program will run like this
// {
//     {
//         var age;
//         csl(age);
//         age=18;
//     }
// }

// Declare Function

// {
//     csl(sum(10,6));
//     function sum(a,b){
//         return a+b;
//     }
// }

// Working 

// {
//     function sum(a,b){
//         return a+b;
//     }
//     csl(sum(10,6));
// }

// EXP Let and Const

// {
//     {
//         csl(age);
//         const age =18; // same with let
//     }
// }

// EXP Overview
const counter1 = makeItCount();

csl(counter1());

function makeItCount(){
    let i=0;
    return increase;
    function increase(){
        return ++i;
    }
}