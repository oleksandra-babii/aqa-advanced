async function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
}

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
}

const allResult = Promise.all([getTodo(), getUser()])
    .then(([todo, user]) => {
        console.log('Promise.all result:');
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => console.error('Promise.all error:', error));

const raceResult = Promise.race([getTodo(), getUser()])
    .then(winner => {
        console.log('Promise.race winner:');
        console.log(winner);
    })
    .catch(error => console.error('Promise.race error:', error));
