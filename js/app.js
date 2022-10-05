const bg = document.querySelector(".background")

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: bg,
    triggerHook: 0,
}).addIndicators().setPin(bg).addTo(controller);

let scrollPos = 0;
let delay = 0;
let accelAmount = 0.1;
scene.on('update', e => {
    scrollpos = scrollPos;
    console.log(e);
    if(e.scrollPos >0){
        gsap.to('.blue',{width:"100%",height:"100%", duration:1});
        gsap.to('.gray',{width:0, duration:1});
        gsap.to('.tes',{x:800, duration:1});        
        gsap.to('.text-intro',{opacity:1, x:"15%",duration:1});
        gsap.to('.scroll', {y:"50%", opacity:0, duration:1});
    }
    if(e.scrollPos<100){
        gsap.to('.blue',{width:"50%",height:"100%", duration:1});
        gsap.to('.gray',{width:"50%", duration:1});
        gsap.to('.text-intro',{opacity:0, x:0,duration:1});
        gsap.to('.tes',{x:0, duration:1});
        gsap.to('.scroll', {y:0, opacity:1, duration:1});
    }
    if(e.scrollPos>600){
   
    }
})

document.querySelector('.menu-item').addEventListener("mouseover", sideHover());
document.querySelector('.menu-item').addEventListener("mouseout", sideOut());
document.querySelector('.menu-item').addEventListener("click", sideOpen());

function sideHover(){
    gsap.to('.sidebar', {width:"8%", duration:0.2})
    gsap.to('.menu', {x:4, duration:0.2})
}
function sideOut(){
    gsap.to('.sidebar', {width:"3%", duration:0.2})
    gsap.to('.menu', {x:0, duration:0.2})
}
function sideOpen(){

}