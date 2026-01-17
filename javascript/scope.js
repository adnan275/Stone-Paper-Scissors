const promise = fetch('https://dummyjson.com/users');

promise.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})