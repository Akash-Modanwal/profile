let body = document.querySelector('body')
let mode = document.querySelector('.mode')
let img = document.querySelector('.flip-img')
let sal = document.querySelector('.SAL')
let preview =  document.querySelector('.preview')
let slide = document.querySelector('.slide')
let cons = document.querySelector('.cons')
let prev1 =  document.querySelector('.preview1')
let slide1 = document.querySelector('.slide1')
let mot = document.querySelector('.mot')
let mot1 = document.querySelector('.mot1')
let motion = document.querySelector('.motion')
let motion1 = document.querySelector('.motion1')


mode.addEventListener("click",()=>{
    body.classList.toggle('backg');
    img.classList.toggle('flip-img-dark')
})

sal.addEventListener("mouseover",()=>{
    preview.style.display = "flex";
    slide.style.display = "flex";
})

sal.addEventListener("mouseout",()=>{
    preview.style.display = "none";
    slide.style.display = "none";
})

cons.addEventListener("mouseover",()=>{
    prev1.style.display = "flex";
    slide1.style.display = "flex";
})

cons.addEventListener("mouseout",()=>{
    prev1.style.display = "none";
    slide1.style.display = "none";
})

mot.addEventListener("click",()=>{
    motion.style.display = "flex"
})

mot.addEventListener("mouseout",()=>{
    motion.style.display = "none"
})

mot1.addEventListener("click",()=>{
    motion1.style.display = "flex"
})

mot1.addEventListener("mouseout",()=>{
    motion1.style.display = "none"
})