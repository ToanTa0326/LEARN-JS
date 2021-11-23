function csl(data){
    console.log(data);
}

// --------- Value types --------
// - String
// - Number
// - BigInt
// - Symbol
// - undefined
// - Boolean
// - null

// EXP: 
// let a = 0;
// let b = a;
// a = 1;
// csl(b) //=> result = 0

// --------- Reference Types -------
// - Object
// - Array
// - Function

// EXP
// let a = {
//     fullname: 'Ta Quang Toan'
// }
// // let b = a;
// // a.fullname = 'Toan Ta';
// // csl(b.fullname); //=> Toan Ta
// // Because b is inheristed a's address so when change value of a or b memory of this value will change => value of this address will change

// function creatnew(obj){
//     obj.fullname = 'Toan Ta';
//     csl(obj);
// }
// creatnew(a)
// csl(a);     //=> Toan Ta

// const student = {
//     name: 'Oanh Ha',
//     profile: {
//         firstName: 'Oanh',
//         lastName: 'Ha',
//         introduction: 'Girl'
//     }
// }

// const studentProfile = student.profile;

// student.profile.introduction = 'Good girl';

// csl(studentProfile.introduction);
// two memory created to save profile's properties and student's properties
// way active => created memory to save profile's properties => return profile's address (#001) => value of address (<#001>) 
// => student = {
//     name: 'Oanh Ha',
//     profile: <#001>
// }

// => creat new memory to save student's properties => return student's address (#002) => value of address (<#002>)

const obj = {
    child: { x: 18 }
}

let z = obj.child

z = { x: 25 }

csl(obj.child.x) // Output: ???