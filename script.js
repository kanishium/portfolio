gsap.from(".nav",{
    opacity:0,
    // y:-10,
    scale:0.5,
    duration:1
})

gsap.from(".first-span",{
  opacity:0,
  y:-40,
  duration:1,
  scrollTrigger:{
    trigger:".first-span",
    scoller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 40%",
    scrub:2
  }
})
gsap.from(".second-span",{
  opacity:0,
  y:40,
  duration:1,
  scrollTrigger:{
    trigger:".first-span",
    scoller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 40%",
    scrub:2
  }
})
// gsap.to(".projects-images img",{
//   transform:"translate(-200%)",
//   scrollTrigger:{
//     trigger:".projects-images",
//     scroll:".main",
//     markers:true,
//     start:"top 20%",
//     end:"top -100%",
//     scrub:2,
//     pin:true
//   }
// })
var cursor=document.querySelector(".cursor")
var slider=document.querySelector(".slider")

slider.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    scale:1,
    opacity:1
  })
})

slider.addEventListener("mouseleave",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    scale:0,
    opacity:0
  })
})

gsap.from(".first span",{
})
