var TextIP=document.querySelector('input[type="text"]');
var CheckboxIP=document.querySelector('input[type="checkbox"]');
var Select=document.querySelector('select');
var Body=document.querySelector('body');

// 1. Input/ Select
// 2. keyup/ keydown


// 1.Input/ Select
TextIP.oninput = function(e){   //onchange,.....
    console.log(e.target.value);
}

CheckboxIP.onchange = function(e){
    console.log(e.target.checked);
}

Select.onchange = function(e){
    console.log(e.target.value);
}

// 2. keyup/keydown  when user press keyboard (up/down/press)
Body.onkeyup=function(e){
    console.log(e.which);
}

// Body.onkeydown=function(e){
//     console.log(e.which);
// }

// Body.onkeypress=function(e){
//     console.log(e.which);
// }
