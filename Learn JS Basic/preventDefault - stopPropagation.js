var AElement=document.links; //anchors
var ULElement=document.querySelector('ul');
var divElement=document.querySelector('div');
var btnElement=document.querySelector('button');

divElement.onclick=function(e){
    console.log('DIV');
}

btnElement.onclick=function(e){
    e.stopPropagation();
    console.log('click ME!');
}



ULElement.onmousedown=function(e){
    e.preventDefault();
    console.log(e.target);
}

// anchors prevent
for(var i of AElement){
    i.onclick=function(e){
        console.log(e.target.href);
        if(!e.target.href.startsWith('https://google.com/'))
            e.preventDefault();
    }
}
