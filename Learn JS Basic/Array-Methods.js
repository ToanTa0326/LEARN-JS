var topics = [
    {
        topic : 'front-end',
        courses: [
            {
                id: 1,
                titlle: 'Java'
            },
            {
                id: 2,
                titlle: 'HTML'
            },
            
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: -1,
                titlle: 'JS'
            },
            {
                id: 2,
                titlle: 'NodeJS'
            }
        ]
    },
];

Array.prototype.reduce2=function(callback,initial){
    let i=0;
    if(initial==undefined){
        i++;
        initial=this[0];
    }
    var total=initial;
    for(;i<this.length;i++)
        total=callback(total,this[i]);
    return total;
}

var flat = topics.reduce2(function(acc,cur){
    return acc.concat(cur.courses);
},[]);

// console.log(flat);

var htmls= flat.map(function(item){
    return `
        <div>
            <h1>${item.titlle}</h1>
            <p>${item.id}</p>
        </div>
    `
})

flat.forEach(function(item,index){
    console.log(item.id>0,index);
})

flat.every(function(item,index){
    console.log(item.id<0,index);
})

function showmessage2(){
    document.write(htmls.join(''));
    console.log(flat);
}

var arr=[1,2,3,4,5,6,7,8];

// arr.pop();
// console.log(arr);
arr.shift();
// console.log(arr);

arr.unshift(1);
// console.log(arr)


some

map

reduce2

