// CLOSUER
// a function can remember where its created  and access variable out of its scope

// Application
// - Short Code
// - Show, adapt 'Private' property in OOP

// NOTE
// variable refered in Closuer will not be deleted after parent function enforce

// EXP Short Code and Private Property

function creatLocalStorage(key){

    // Make store Private from user
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    // Private save function
    function save(){
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key){
            return store[key];
        },
        add(key, ...value){
            if(!Array.isArray(store[key])){
                store[key] = [];
            }
            store[key].push(...value);
            save();
        },
        edit(key, ...value){
            store[key] = value;
            save();
        },
        delete(key){
            delete store[key];
            save();
        }
    }
    return storage;
}

const storage = creatLocalStorage('Tona');