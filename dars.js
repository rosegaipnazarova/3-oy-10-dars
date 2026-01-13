const elBox = document.querySelector(".box")
fetch("https://jsonplaceholder.typicode.com/comments")
.then((res) => res.json())
.then((data) => renderComments(data))
.catch(error => console.log(error))
function renderComments(data) {
    for (const element of data) {
        let html = `
        <li>
        <h1> ${element.name}</h1>
        <p> ${element.body}</p>
    </li>
    `
    elBox.insertAdjacentHTML("beforeend",html)
    }
}



const elPosts = document.querySelector(".posts")
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => renderPosts(data))
.catch(error => console.log(error))
function renderPosts(data) {
    for (const element of data) {
        let html = `
        <li>
        <h1> ${element.title}</h1>
        <p> ${element.body}</p>
    </li>
    `
    elPosts.insertAdjacentHTML("beforeend",html)
    }
}



const elAlbums = document.querySelector(".albums")
fetch("https://jsonplaceholder.typicode.com/albums")
.then((res) => res.json())
.then((data) => renderAlbums(data))
.catch(error => console.log(error))
function renderAlbums(data) {
    for (const element of data) {
        let html = `
        <li>
        <h1> ${element.title}</h1>
        <p> ${element.id}</p>
        <p> ${element.userId}</p>
    </li>
    `
    elAlbums.insertAdjacentHTML("beforeend",html)
    }
}


const elPhotos = document.querySelector(".photos")
fetch("https://jsonplaceholder.typicode.com/photos")
.then((res) => res.json())
.then((data) => renderPhotos(data))
.catch(error => console.log(error))
function renderPhotos(data) {
    for (const element of data) {
        let html = `
        <li>
        <h1> ${element.title}</h1>
        <img src=" ${element.thumbnailUrl}" alt="${element.title}">
    <h4></h4>
    </li>
    `
    elPhotos.insertAdjacentHTML("beforeend",html)
    }
}


const elTodos = document.querySelector(".todos")
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => renderTodos(data))
.catch(error => console.log(error))
function renderTodos(data) {
    for (const element of data) {
        let html = `
        <li>
        <h1> ${element.title}</h1>
        <p><span ${element.completed ? 'done' : 'pending'}></span></p>
    </li>
    `
    elTodos.insertAdjacentHTML("beforeend",html)
    }
}


const elUsers = document.querySelector(".users")
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => renderUsers(data))
.catch(error => console.log(error))
function renderUsers(data) {
    for (const user of data) {
        let html = `
        <div>
        <h1> ${user.name}</h1>
        <p> ${user.username}</p>
        <p> ${user.email}</p>
        <p> ${user.phoneNumber}</p>
    </div>
    `
    elUsers.insertAdjacentHTML("beforeend",html)
    }
}
