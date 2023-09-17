var typed = new Typed('.text', {
strings: ['Frontend Developer!','Web Designer','Web Developer.'],
typeSpeed: 100,
backSpeed: 60,
loop: true
});

const header = document.querySelector("header");
window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky" , this.window.scrollY > 0);

}); 

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = function(){
    menu.classList.toggle('active')
    navbar.classList.toggle('bx-x')
};

navbar.onclick = function(){
    menu.classList.remove('active')
    navbar.classList.remove('bx-x')

};


var typed = new Typed('.text-3', {
    strings: ['Frontend Developer!','Web Designer','Web Developer.'],
    typeSpeed: 100,
    backSpeed: 60,
loop: true
});