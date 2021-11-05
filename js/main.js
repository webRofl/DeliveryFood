const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')

const logIn = (user) => {
    
    buttonAuth.style.display = 'none'

    buttonOut.style.display = 'flex'
    userName.style.display = 'flex'

    userName.textContent = user.login

    modalAuth.style.display = 'none'
}

const logOut = () => {
    buttonAuth.style.display = 'flex'

    buttonOut.style.display = 'none'
    userName.style.display = 'none'

    userName.textContent = ''

    localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
})

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
})

buttonOut.addEventListener('click', () => {
    logOut()
})

logInForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }


    localStorage.setItem('user', JSON.stringify(user))

    logIn(user)
})

if (localStorage.getItem('user')) {
    logIn(JSON.parse(localStorage.getItem('user')))
}