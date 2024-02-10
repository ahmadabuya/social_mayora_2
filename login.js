const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username, password)

    if (authenticated) {
        window.location.href = "index.html"
    } else {
        alert("Masukkan kata sandi yang benar!")
    }
})

// function for checking username and password

let username = 'admin'
let password = '12345'

function authentication(usernameInput, passwordInput) {

    if (usernameInput == username && passwordInput == password) {
        return true
    } else {
        return false
    }
}

