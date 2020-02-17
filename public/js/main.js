
// black and white

let body = document.querySelector('body')
let btnbl = document.getElementById('btnbl')
let btnwh = document.getElementById('btnwh')
let empo = document.getElementById('empo')
let bilou1 = document.getElementById('bilou1')
let bilou2 = document.getElementById('bilou2')
let bilou3 = document .getElementById('bilou3')
let bilou123 = document.getElementById('bilou123')
let container2 = document.getElementById('container2')
let navv = document.getElementById('navv')

btnbl.addEventListener('click',()=>{
    body.style.backgroundColor = "white"
    empo.setAttribute('class','text-dark')
    bilou1.style.border = "solid white 5px"
    bilou2.style.border = "solid white 5px"
    bilou3.style.border = "solid white 5px"
    bilou123.style.border = "solid white 5px"
    container2.style.border = "solid white 5px"
    navv.setAttribute('class',' navbar navbar-expand-lg  bg-white navbar-light')
    
    body.style.color = 'black'
})

btnwh.addEventListener('click',()=>{
    body.style.backgroundColor = "black"
    empo.setAttribute('class','text-white')
    bilou1.style.border = "solid black 5px"
    bilou2.style.border = "solid black 5px"
    bilou3.style.border = "solid black 5px"
    bilou123.style.border = "solid black 5px"
    container2.style.border = "solid black 5px"
    navv.setAttribute('class',' navbar navbar-expand-lg navbar-dark')
    navv.style.backgroundColor = "black"
    body.style.color = 'darkgray'
   
})

// black and white


// connexion

let connexion = document.getElementById('connexion')
let modal = document.getElementById('modal')
let inscrip = document.getElementById('inscrip')
let modal2 = document.getElementById('modal2')
let inscrip2 = document.getElementById('inscrip2')

connexion.addEventListener('click',()=>{
    modal.style.display = "flex"
})
quit.addEventListener('click',()=>{
    modal.style.display = "none"
    alert('Bien enregistré!')
})
inscrip.addEventListener('click',()=>{
    modal2.style.display = "flex"
})
inscrip2.addEventListener('click',()=>{
    modal2.style.display = "none"
    // alert('Bien enregistré!')
})

// fixed-nav------------------

window.addEventListener('scroll',() =>{
   if(window.scrollY >= 70){
    navv.classList.add("fixed-top")
 } else if (window.scrollY < 70){
    navv.classList.remove("fixed-top")
}})

// fixed-nav---------------

