// fetch

fetch('/data.json')
.then(responseStream => {
    if(responseStream.status === 200){
        return responseStream.json();
    }else{
        throw new Error('Request error');
    }
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log('Erro', err);
});

// Async / Await

const asyncTimer = () => 
    new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(123);
        },1000);
    });

const simpleFunc = async() => {
    //throw new Error('error');
    const data = await asyncTimer();
    return data;
};

simpleFunc()
.then(data => console.log(data))
.catch(error => console.log(error));


// EventEmitter

const EventEmitter = require('events');

const emitter = new EventEmitter();

class Users extends EventEmitter{
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data =>{
    console.log(data);
});

users.userLogged({user: 'Igor'});
users.userLogged({user: 'Santos'});