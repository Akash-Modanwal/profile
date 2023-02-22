document.querySelector('.mode').addEventListener("click",()=>{
    document.querySelector('body').classList.toggle('backg');
    document.querySelector('a').classList.toggle('link-light');
    // document.querySelector('.nav-link').classList.toggle('link-light');
    // document.querySelector('.nav-link').classList.toggle('link-light');//not working
})

document.querySelector('.SAL').addEventListener("mouseover",()=>{
    document.querySelector('.preview').style.display = "flex";
    document.querySelector('.slide').style.display = "flex";
})

document.querySelector('.SAL').addEventListener("mouseout",()=>{
    document.querySelector('.preview').style.display = "none";
    document.querySelector('.slide').style.display = "none";
})

document.querySelector('.cons').addEventListener("mouseover",()=>{
    document.querySelector('.preview1').style.display = "flex";
    document.querySelector('.slide1').style.display = "flex";
})

document.querySelector('.cons').addEventListener("mouseout",()=>{
    document.querySelector('.preview1').style.display = "none";
    document.querySelector('.slide1').style.display = "none";
})

document.querySelector('.mot').addEventListener("click",()=>{
    document.querySelector('.motion').style.display = "flex"
})

document.querySelector('.mot').addEventListener("mouseout",()=>{
    document.querySelector('.motion').style.display = "none"
})

// setTimeout(document.querySelector('.motion').style.display = "none",1000)

document.querySelector('.mot1').addEventListener("click",()=>{
    document.querySelector('.motion1').style.display = "flex"
})

document.querySelector('.mot1').addEventListener("mouseout",()=>{
    document.querySelector('.motion1').style.display = "none"
})

// $(function () {
//     $('[data-toggle="popover"]').popover()
//   })

// $(function () {
//     $('.example-popover').popover({
//       container: '.cont'
//     })
//   })

// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// $('#element').popover('show')

// document.querySelector('.en').addEventListener("click",()=>{
//     document.querySelector('en').classList.toggle('show.bs.popover');
// }) 