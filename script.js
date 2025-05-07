const container= document.getElementById("chocolate-branco")
const registerBtn = document.getElementById("register")
const loginBth = document.getElementById("login")

registerBtn.addEventListener('click', () => {
    container.classList.add('active');    
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});