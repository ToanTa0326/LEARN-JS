// Created for Call function and can bind this too function

function csl(data){
    console.log(data);
}

//EXP about call method and bind
// this.name= 'Tona Ta';

// const student = {
//     name: 'Ta Quang Toan',
//     getFullname(){
//         csl(this.name)
//     }
// }

// student.getFullname.call(); // => Tona Ta
// // call is not bind this for method of student so this => window
// student.getFullname.call(student); // => Ta Quang Toan

// EXP about inherited in OOP

// function Animal(name, weight){
//     this.name = name;
//     this.weight = weight;
// }

// function Chicken(name, weight, foot){
//     this.foot = foot;
//     Animal.call(this, name, weight);
//     return [
//         this.name,
//         this.weight,
//         this.foot
//     ]
// }

// csl(Chicken.call(this,'dong tao', 5, 2));

// EXP about function borrowing and arguments

// function logger(){
//     // arguments inherited Array prototype ForEach
//     // Array.prototype.forEach.call(arguments, item => csl(item));

//     // arguments inherited Array prototype slice
//     // csl(Array.prototype.slice.call(arguments));
    
//     //convert arguments to Array
//     // csl(Array.from(arguments));

//     //ES6
//     // csl([...arguments]);
// }

// logger(1,2,3,4,5);  //value in logger is arguments