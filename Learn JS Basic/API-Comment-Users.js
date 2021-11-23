const UsersAPI = 'http://localhost:3000/Users';
const $ = document.querySelector.bind(document);
const $$ =document.querySelectorAll.bind(document);

function start(){
    getUsers(renderUsers)
    handleCreatUser(getUsers(renderUsers));
}

start();

//----------- Call API -------------
function getUsers(callback){
    fetch(UsersAPI)
        .then(res => res.json())
        .then(callback)
}

function renderUsers(Users){
    var listUsers = $('#listUsers');
    var htmls=Users.map(item => {
        return `
            <li class="User-${item.id}">
                <h4 class="User-name-${item.id}">${item.name}</h4>
                <p class="User-Slogan-${item.id}">${item.Slogan}</p>
                <button onclick="handleEditUser(${item.id})">Edit</button>
                <button onclick="handleSaveUser(${item.id})">Save</button>
                <button onclick="handleDeleteUser(${item.id})">Delete</button>
            </li>
        `;
    });

    listUsers.innerHTML=htmls.join('');
}
//---------- END CALL ------------

// -------- Creat User -----------
function creatUser(data,callback){
    var option={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(UsersAPI, option)
        .then(res => res.json())
        .then(callback)
}

function handleCreatUser(callback){
    $('#creat-btn').onclick = () => {
        var name = $('input[name="name"]').value;
        var Slogan = $('input[name="Slogan"]').value;

        var data = {
            name,
            Slogan
        };

        creatUser(data,callback);
    }
}
// --------- END CREAT USER --------

// --------- EDIT UERS -----------
function handleEditUser(id){
    var name = $('.User-name-' + id);
    var Slogan = $('.User-Slogan-' + id);
    name.setAttribute('contentEditable', 'true');
    Slogan.setAttribute('contentEditable', 'true');
}

function renderSaveUser(data,id){
    return `
        <li class="User-${id}">
            <h4 class="User-name-${id}">${data.name}</h4>
            <p class="User-Slogan-${id}">${data.Slogan}</p>
            <button onclick="handleEditUser(${id})">Edit</button>
            <button onclick="handleSaveUser(${id})">Save</button>
            <button onclick="handleDeleteUser(${id})">Delete</button>
        </li>
    `;
}

function saveUser(data, id){
    var option={
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(UsersAPI + '/' + id, option)
        .then(res => res.json())
        .then(() => {
            var UserItem = $('.User-' + id);
            UserItem.outerHTML = renderSaveUser(data,id);
        })
}

function handleSaveUser(id){
    var name = $('.User-name-' + id).textContent;
    var Slogan = $('.User-Slogan-' + id).textContent;

    var data = {
        name, 
        Slogan
    };

    saveUser(data, id);
}
// ------------ END Edit User ---------------


// ------------ DELETE User ---------------

function handleDeleteUser(id){
    var option={
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    fetch(UsersAPI + '/' + id,option)
        .then(res => res.json())
        .then(() => {
            var UserItem=document.querySelector('.User-' + id);
            if(UserItem){
                UserItem.remove();
            }
        })
}

//  --------- END Delete -------------------