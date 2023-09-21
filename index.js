let body = document.querySelector('body')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

btn1.addEventListener('click', ()=>{
    btn1.classList.toggle('open')
    btn2.classList.toggle('off')
    btn3.classList.toggle('off')
})
btn2.addEventListener('click', ()=>{
    btn2.classList.toggle('open')
    btn1.classList.toggle('off')
    btn3.classList.toggle('off')
})
btn3.addEventListener('click', ()=>{
    btn3.classList.toggle('open')
    btn2.classList.toggle('off')
    btn1.classList.toggle('off')
})