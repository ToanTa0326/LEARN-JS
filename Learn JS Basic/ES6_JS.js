//--------- Arrow Function----------------------
const abc = (logger) => {
    return logger;
}
// console.log(abc(123))

const Who = () => ({
    name: 'Ta Quang Toan',
    group: 'FreeLance'
})      //return an OBJ
// console.log(Who())

var obj1 ={
    name: 'Ta Quang Toan',
    group: 'Freelance',
    
    getName: () => {
        return this;        
    }
}
// console.log(obj1.getName())      //canot get context value
//---------END Arrow function-------------------------


//--------- Endhanced parameter values--------------------------
var name='Ta Quang Toan';
var group='FreeLance';
var obj2={
    name,
    group
}
// console.log(obj2);
// key===value => only key

var filedName='name',
    filedGroup='group';
var obj3={
    [filedName]: 'Ta Quang Toan',
    [filedGroup]: 'FreeLance'
}
// console.log(obj3);
// get key by values

var obj4={
    name,
    group,
    getName() {
        return this.name;
    }
}

// console.log(obj4.getName());
// define methods

//-------------------END Enhanced Object literals----------------------------


//------------------- DESTRUCTURING, REST Parameters, SPRED----------------------------
var array=[1,2,3,4,5,6,7,8,9];

var [a,b,...rest]=array;
// console.log(a,b,rest);
// Destructuring array[0]=a, array[1]=b, REST save maintain values

var logger = (...rest) => {     //REST 1,2,3,... to [1,2,3,...]
    // for(var i=0; i < rest.length; i++)
    //     console.log(rest[i]);
}
logger(...array);   
//SPREAD array to 1,2,3,4,5,6,7,8,9

var obj5={
    name: 'Ta Quang Toan',
    group: 'FreeLance',
    decription: 'Try To SUCCESS!',
    Slogan: 'Bla bla bla',
    childrend: {
        name: 'Ta Quang Tona'
    }
};

var {name: parentName, Name='Toan Ta', ...rest}=obj5; //rename,  define default name of OBJ
// DESTRUCTURING OBJ

// console.log(parentName);
// rename key of OBJ

// console.log(Name);
// if key of child === key of parent => key of child

// console.log(rest);
// REST parameter

// -----------------END DESTRUCTURING, REST, SPREAD-----------------------


//------------------ Tagged template literals------------------------------
var obj6={
    name: 'javascript',
    address: 'F8'
};

function highlight([first, ...string], ...values){
    return values.reduce(
        (res, cur) => 
            res.concat(`<span>${cur}</span>`,string.shift())
        ,[first])
        .join('')

}

var htmls=highlight`Hoc lap trinh ${obj6.name} tai ${obj6.address}!`;
// console.log(htmls);
//------------------- END Tagged template literals--------------------


//------------------- Option Chanining (?.) ------------------------
var obj7={
    name: 'Ta Quang TOna',
    cast1: {
        name: 'Ta Quang Toan',
        cast2: {
            name: 'Ta Quang Toan',
            cast3: {
                name: 'Ta Quang Toan'
            }
        }
    }
}

// console.log(obj7.cast1?.cast2?.cast3?.name);    //obj

var obj8={
    name: 'Ta Quang Tona',
    arr: [1,2,3,4,5,6]
}

// console.log(obj8?.arr?.[2]);     //array

var obj9={
    name:'Ta QUang Toan',
    getName(){
        return this.name
    }
}

// console.log(obj9.getName?.())       // function

var obj10 = null,
    x=0;
var isincrease=obj10?.[x++];    //value
//null so x not increase
// console.log(x);

//----------------------- END Optional Chaining---------------------------