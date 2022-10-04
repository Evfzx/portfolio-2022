// gsap.fromTo('.tes',{opacity: 0,x:-100}, {x:0,opacity: 1,duration: 1})

// gsap.fromTo('.background',{y:0,width:"100%",height:"100vh"},{y:"8%",width:"92%",height:"84vh",duration:1,ease: Sine.easeIn})

// gsap.fromTo('.blue',{width:"100%"},{width:"50%", duration:1,ease: Sine.easeIn})
// gsap.fromTo('.gray',{width:"0%"},{width:"50%", duration:1,ease: Sine.easeIn})

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
        gsap.to('.blue',{width:"100%",duration:1,ease: Sine.easeIn})

})
// document.addEventListener('wheel', thorttle(scrollChange, 1500));
// function scrollChange(e){
//     if(e.deltaY >0){
//         gsap.to('.blue',{width:"100%",duration:1,ease: Sine.easeIn})
//         gsap.to('.gray',{width:"0%",duration:1,delay:0.5,ease: Sine.easiIn})
//         gsap.to('.tes',{x:"120%",duration:1, ease: Sine.easeIn})
//         document.querySelectorAll('.tes')
//     }if(e.deltaY<0){
//         gsap.to('.blue',{width:"50%",duration:1,delay:0.5,ease: Sine.easeIn})
//         gsap.to('.gray',{width:"50%",duration:1,ease: Sine.easiIn})
//         gsap.to('.tes',{x:0,duration:1, ease: Sine.easeIn})
//     }
//     console.log(e);
// }

// function thorttle(func, limit){
//     let inThorttle;
//     return function(){
//         const args = arguments;
//         const context = this;
//         if(!inThorttle){
//             func.apply(context, args);
//             inThorttle = true;
//             setTimeout(()=>(inThorttle=false),limit)
//         }
//     };
// }
