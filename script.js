let form = document.getElementById('form')
let output = document.getElementById('output')
let usersList = document.getElementById('usersList')
const errorBox = document.getElementById('errorBox')

let tumblrAPI = 'https://api.tumblr.com/v2/blog/'

let usersArr = []

form.onsubmit = (e) => {
    e.preventDefault()
    let tumblrURL = document.getElementById('tumblr-url')
    errorBox.classList.add('hidden')

    tumblrURL = tumblrURL.value

    if (tumblrURL.indexOf('https://') === 0) {
        tumblrURL = tumblrURL.substring('https://'.length)
    } else if (tumblrURL.indexOf('http://') === 0) {
        tumblrURL = tumblrURL.substring('http://'.length)
    }
    
    // create DOM elements
    let userIMG = document.createElement('img')
    let userURL = document.createElement('p')
    userURL.href = tumblrURL
    userURL.innerHTML = tumblrURL
    userIMG.src = tumblrAPI + encodeURIComponent(tumblrURL) + '/avatar/512'

    usersArr.unshift(userIMG)
    displayUsers()

    userIMG.onerror = (e) => { 
        userIMG.remove()
        errorBox.classList.remove('hidden')
        console.log(userIMG)
    }

}

displayUsers = () => {
    usersArr.forEach((user) => {
        let newLi = document.createElement('li')
        newLi.appendChild(user)
        user.classList.add('output-img')
        usersList.appendChild(newLi)
    })
}