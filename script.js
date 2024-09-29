var typed = new Typed('.text', {
strings: ['Frontend Developer!','Web Designer','Web Developer.'],
typeSpeed: 100,
backSpeed: 60,
loop: true
});

const header = document.querySelector("header");
window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky" , this.window.scrollY > 10);

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

const tl = gsap.timeline();

tl.from(".logo",{
    opacity:0,
    duration: 1,
    x: -150,
    stagger:1
});


tl.from(".navbar .list",{
    opacity: 0,
    duration: 0.7,
    y: -30,
    stagger:0.3,
});

tl.from(".left .text-2 p",{
    opacity:0,
    duration: 0.5,
    x:-1100,
});



gsap.from("#about .content .left-cont img",{
    opacity:0,
    x:-1500,
    duration:1,
    delay:1,
    rotate:"360",
    scale:"0.2",
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 0%",
        end:"top -20%",
        scrub:1,
        pin:true


    }
})