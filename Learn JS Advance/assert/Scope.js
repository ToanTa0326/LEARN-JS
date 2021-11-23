// #SCOPE

function csl(data){
    console.log(data);
}

// - Global : Object defined global

// - Code Block: Use let, const to define variable in block start with '{' and end with '}'
// Example: 

// EXP1:
// {
//     let age = 18
//     console.log(age)
// }  
// => res is 18;

// EXP2:
// {
//     let age = 18
// }
// console.log(age);
// => age is not defined because age only use in local scope of block {};

// EXP3:
// {
//     {
//         var age =18
//     }
// }
// csl(age);
// Use var in code block make variable become global

// - Local Variable : a variable defined in local function like: var and function

// EXP
// (function (){
//     var age =19;
//     csl(age);
// })()

// csl(age);
// => result is 19 and then is err
// err because age only use in local of function

//----------------- Method access a variable --------------
// find varibale from Local to Global if cant find => err because not defined
// if variable defined in local after access with something in global => err

// EXP1: from Local - Global
// const age =19;

// {
//     {
//         const age = 16
//         {
//             {
//                 const age =12;
//                 csl(age);
//             }
//         }
//     }
// }

// => result is 12 and if not defied in line 57 => result is 16 and the same with line 54 => result is 19 and the same with 50 => error

// EXP2: defined after access
// {
//     {
//         {
//             {
//                 csl(age);
//                 const age =12;
//             }
//         }
//     }
// }

//---------------- When is variable deleted ? -------------
// - Global variable => when exit program
// - Code Block and function => when exit Block or Function
// - variable in Function accessed in Local functon => this is async variable

// EXP
// function makeItUp(){
//     let count = 0;
//     function increase(){
//         return ++ count;
//     }
//     return increase;
// }

// let increase = makeItUp();
// csl(increase());    //=> 1
// csl(increase());    // => 2
// csl(increase());    // => 3

// count not deleted when exit makeItUp 
// makeItUp => return local function => return Global variale
//  => so this variable is async variable