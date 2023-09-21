let icon = document.getElementById('icon')
let body = document.querySelector('body')
let h1login = document.getElementById('loginh1')
let loginbt = document.getElementById('btnlogin')
let linha = document.getElementById('forma')
let linhas = document.getElementById('forma2')
let circulo = document.getElementById('imagem_redonda')
icon.addEventListener('click', ()=>{
    icon.classList.toggle('dark')
    body.classList.toggle('dark')
    h1login.classList.toggle('dark')
    loginbt.classList.toggle('dark')
    linha.classList.toggle('dark')
    linhas.classList.toggle('dark')
    circulo.classList.toggle('dark')
})
function redirect(){
    window.location = "index.html"
}