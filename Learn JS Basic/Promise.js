//---------- Promise concept
// var promise=new Promise(
//     function(resolve,reject){
//         //logic
//         //success -> resolve();
//         //failure -> reject();
//         ('')? resolve(123) : reject('failure!')
// });

// promise
//     .then(function(a){
//         console.log(a);
//     })
//     .catch(function(b){
//         console.log(b);
//     })
//     .finally(function(){
//         console.log("DONE!");
//     })

//----------- Promise methods
// function sleep(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve,ms);
//     });
// }

// sleep(1000)
//     .then(function(){
//         console.log('first');
//         return '1234';          //return Promise resolve(data)
//     })
    
//     .then(function(data){       //Do promise has been returned before it
//         console.log(data);
//         // Default syntax return Promise() if not have return 
//         // return Promise.reject('fail to contact!');  //catch promise reject and not do all .then after
//     })

//     .then(function(){       //same .then second
//         console.log('Third');
//         return sleep(3000);
//     })
    
//     .catch(function(b){
//         console.log(b);
//     })
    
//     .finally(function(){
//         console.log("DONE!");
//     })

// var promise1=new Promise(function(resolve){
//     setTimeout(resolve([1]),1000);
// })

// var promise2=new Promise(function(resolve){
//     setTimeout(resolve([2,3]),3000);
// })

// var promise3 = Promise.reject('fail to contact');


// Promise.all([promise1, promise2])
//     .then(function(result){
//         console.log(result);
//         console.log(result[0].concat(result[1]));
//     })

// Promise.all([promise1, promise2, promise3])     //if one of all promise fail, then cant run. 
// .then(function(result){
//     console.log(result);
//     console.log(result[0].concat(result[1]));
// })
// .catch(function(err){
//     console.log(err);
// })



var comments=[
    {
        id: 1,
        user_id: 1,
        content: 'Bao gio cho toi co the di lam :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Ban con 5 thang cho viec nay'
    },
    {
        id: 3,
        user_id: 2,
        content: 'make up mind!'
    }
];

var users=[
    {
        id: 1,
        name: 'Ta Quang Toan'
    },
    {
        id: 2,
        name: 'naoT Ta'
    },
    {
        id: 3,
        name: 'Quang Toan'
    }
];

function getComments(comments){
    return new Promise(resolve => {
        setTimeout(() => resolve(comments), 1000)
    })
}

function getUsersbyID(usersID){
    var res = users.filter(item => usersID.includes(item.id));

    return new Promise(resolve => {
        setTimeout(() => resolve(res), 1000)
    })
}

getComments(comments)
    .then(comments => {
        let usersID = comments.map(item => item.user_id);

        return getUsersbyID(usersID)
            .then(users => ({
                users: users,
                comments: comments
            }))
    })

    .then(data => {
        let commentBlock = document.querySelector('.commentBlock');
        let html = [];
        data.comments.forEach(comment => {
            let user = data.users.find(item => item.id === comment.user_id);

            html.push(`<li>${user.name}: ${comment.content}</li>`);
        });

        Object.assign(commentBlock.style, {
            color: 'rgba(0,0,0,0.7)',
            display: 'block',
            fontSize: '30px'
        })

        commentBlock.innerHTML = html.join('');

        setInterval(() => {
            commentBlock.classList.toggle('hide');
        }, 1500);
    })