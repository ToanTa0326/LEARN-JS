const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function csl(data){
    console.log(data);
}

const UserAPI = `https://jsonplaceholder.typicode.com/users`;
const listUsers = $('#listUsers'),
      creatBtn = $('#creat-btn')

function start(){
    getUsers(renderUsers);
    handleCreatUser(creatUser(renderUsers))
}

//------------- CALL API
function getUsers(callback){
    fetch(UserAPI)
        .then(res => res.json())
        .then(callback)
}

function renderUsers(Users){
    let htmls = Users.map(user => {
        return `
            <li class="User-${user.id}">
                <h4 class="User-name-${user.id}">${user.name}</h4>
                <p class="User-email-${user.id}">${user.email}</p>
                <button onclick="handleEditUser(${user.id})">Edit</button>
                <button onclick="handleSaveUser(${user.id})">Save</button>
                <button onclick="handleDeleteUser(${user.id})">Delete</button>
            </li>`;   
    });
    listUsers.innerHTML = htmls.join('');
    csl('done!');
}
//------------------- END CALL

//------------------ Creat User
function creatUser(data, callback){
    let method = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    
    fetch(UserAPI, method)
        .then(res => res.json())
        .then(callback)
}

function handleCreatUser(callback){
    creatBtn.onclick = () => {
        var name = $('input[name="name"]').value;
        var email = $('input[name="email"]').value;

        var data = {
            name,
            email
        };

        creatUser(data, callback)
    }
}
//-------------- END Creat User

//-------------- Edit User
function handleEditUser(id){
    var name = $('.User-name-' + id);
    var email = $('.User-email-' + id);

    name.setAttribute('contentEditable', 'true');
    email.setAttribute('contentEditable', 'true');
}

function renderSaveUser(data, id){
    return `
        <li class="User-${id}">
            <h4 class="User-name-${id}">${data.name}</h4>
            <p class="User-email-${id}">${data.email}</p>
            <button onclick="handleEditUser(${id})">Edit</button>
            <button onclick="handleSaveUser(${id})">Save</button>
            <button onclick="handleDeleteUser(${id})">Delete</button>
        </li>
    `;
}

function saveUser(data, id){
    let method = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(UserAPI + '/' + id, method)
        .then(res => res.json())
        .then(() => {
            let userItem = $(`.User-${id}`);
            if(userItem) userItem.outerHTML = renderSaveUser(data, id);
        })
}

function handleSaveUser(id){
    var name = $('.User-name-' + id).textContent;
    var email = $('.User-email-' + id).textContent;

    let data = {
        name,
        email
    }

    saveUser(data, id);
}
//--------------- End Edit User

//--------------- Handle Delete User
function handleDeleteUser(id){
    let method = {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(UserAPI + '/' + id, method)
        .then(res => res.json())
        .then(() => {
            let userItem = $(`.User-${id}`);
            if(userItem) userItem.remove();
        })
}
//-------------- End Handle Delete User
start();