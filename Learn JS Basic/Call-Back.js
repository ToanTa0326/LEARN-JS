Array.prototype.forEach2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index],index,this);
        }
    }
}

Array.prototype.every2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)==false){
                return false;
            }
        }
    }
    return true;
}

Array.prototype.some2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                return true;
            }
        }
    }
    return false;
}

Array.prototype.filter2=function(callback){
    var total=[];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var curr=callback(this[index],index,this);
            if(curr)
                total.push(this[index]);
        }
    }
    return total;
}

Array.prototype.find2=function(callback){
    var output;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(!!callback(this[index],index,this))
                return this[index];
        }
    }
    return output;
}

var arr=[
    {
        title: 'HTML',
        inportant: 160
    },
    {
        title: 'JS',
        inportant: 170
    },
    {
        title: 'CSS',
        inportant: 210
    },
];

// arr.length=100;
// console.log(arr);



// var ans=arr.find2(function(item,index,arr){
//     console.log(item,index,arr);
//     return item.inportant>=210;
// })

// console.log(ans);

function getData(link, callback) {
    setTimeout(() => {
       callback();
    }, 1000)
 }
 
 getData("Data1", () => {
    getData("Data2", () => {
       getData("Data2", () => {
          getData("Data3", () => {
             getData("Data4", () => {
                getData("Data5", () => {
                   getData("Data6", () => {
                      console.log("Done");                     
                   })
                })
             })
          })
       })
    })
 })