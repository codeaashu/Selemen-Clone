/* ===( CODE AASHU )=== */ 
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

function loader() {
    var tl1 = gsap.timeline({
    })

    tl1
        .from("#ig6", {
            scale: 0,
            duration: 1
        }, "a")
        .from("#ig3", {
            scale: 0,
            delay: .2,
            duration: 1
        }, "a")
        .from("#ig4", {
            scale: 0,
            delay: .4,
            duration: 1
        }, "a")
        .from("#ig5", {
            delay: .6,
            scale: 0,
            duration: 1
        }, "a")
        .from("#ig7", {
            delay: .8,
            scale: 0,
            duration: 1
        }, "a")
        .from("#ig2", {
            scale: 0,
            delay: 1,
            duration: 1
        }, "a")
        .from("#ig1", {
            scale: 0,
            delay: 1.2,
            duration: 1
        }, "a")
        .from("#heading img", {
            transform: "translateY(100%)",
            delay: .7,
            duration: .8
        }, "a")

}
loader()

function pgOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top top",
            end: "top -150%",
            // markers:true,
            scrub: 4,
            pin: true
        }
    })
    tl
        .to("#ig1", {
            x: "130%",
            y: "155%",
        }, "a")
        .to("#ig2", {
            x: "-80%",
            y: "200%",
            delay: .04,
        }, "a")
        .to("#ig3", {
            x: "-70%",
            y: "-140%",
            delay: .06,
        }, "a")
        .to("#ig4", {
            x: "140%",
            y: "-150%",
            delay: .10,
        }, "a")
        .to("#ig5", {
            x: "110%",
            y: "140%",
            delay: .14,
        }, "a")
        .to("#ig6", {
            x: "150%",
            y: "-190%",
            delay: .18,
        }, "a")
        .to("#ig7", {
            x: "-80%",
            y: "-180%",
            delay: .23,
        }, "a")
        .to("#page1 h4", {
            opacity: 0,
            delay: .23,
        }, "a")



}
pgOne()

function pgTwo(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            // markers:true,
            start:"top 70%",
            end:"top 55%",
            scrub:2
        }
    })
    tl
    .from("#down #line1",{
        width:"0%"
    },"a")
    .from("#down #line2",{
        height:"0%"
    },"a")

    gsap.from("#page2 #line",{
        height:"0%",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            // markers:true,
            start:"top 10%",
            end:"top -10%",
            scrub:2
        }
    })
}
pgTwo()

function page3(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 65%",
            scrub:2    
        }
    })
    tl3
    .from("#page3 #l1",{
        width:"0%"
    },"l")
    .from("#page3 #line3-vt",{
        height:"0%"
    },"l")
    gsap.from("#page3 #l2",{
        width:"0%",
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            // markers:true,
            start:"bottom 90%",
            end:"bottom 85%",
            scrub:2
        }
    })
}
page3()

function eightAnime(){
gsap.to("#page4 img",{
    scale:20,
    rotate:90,
    y:"-500%",
    x:"40%",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        // markers:true,
        start:"16% 0%",
        end:"top -150%",
        scrub:1,
        pin:true
    }
})
}
eightAnime()

function pg5(){
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top 0%",
            end:"top -300%",
            scrub:2,
            pin:true
        }
    })
    tl5
    .to("#pt1",{
        clipPath: "ppolygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    },"a")
    .to("#pt2",{
        clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
    },"a")
    .to("#pt3",{
        clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
    })
}
pg5()

function pg6(){
    var tl6 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            // markers:true,
            start:"top 65%",
            end:"top 40%",
            scrub:2,
        }
    })
    tl6
    .from("#line6-vt",{
        height:"0"
    },"h")
    .from("#line6",{
        width:"0"
    },"h")
    .from("#line6-h",{
        width:"0",
    },"h")
    
    
    var tl7 = gsap.timeline({
        scrollTrigger:{
            trigger:"#elem3",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 70%",
            scrub:2,
        }
    })
    tl7
    .from("#linee",{
        width:"0",
    })
    .from("#para p",{
        transform:"translateY(100%)"
    })
    
}
pg6()

var over = document.querySelectorAll("#page9 .over")

over.forEach(function(ov){
    gsap.to(ov,{
        width:"0%",
        scrollTrigger:{
            trigger:ov,
            scroller:"#main",
            // markers:true,
            start:"top 45%",
            end:"top -20%",
            scrub:true
        }
    })
})


var tl13 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page13",
        scroller:"#main",
        // markers:true,
        start:"top 45%",
        end:"top -30%",
        scrub:2
    }
})
tl13
.from("#page13 #one",{
    y:"25%"
},"a")
.from("#page13 #two",{
    y:"45%",
},"a")
.from("#page13 #three",{
    y:"36%"
},"a")


var tl10 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page10",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:2,
    }
})
tl10
.from("#li2",{
    height:"0"
},"h")
.from("#li1",{
    width:"0"
},"h")


var tl14 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page14",
        scroller:"#main",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub:2,
    }
})
tl14
.from("#line14-v",{
    height:"0"
},"h")
.from("#line14",{
    width:"0"
},"h")

var tll = gsap.timeline({
    scrollTrigger:{
        trigger:"#footer",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:2,
    }
})
tll
.from("#fl",{
    height:"0"
},"h")
var clutter =""
document.querySelector("#footer h1").textContent.split("").forEach(function(letter){
    clutter += `<span>${letter}</span>`
})
document.querySelector("#footer h1").innerHTML = clutter

var tle = gsap.timeline({
    scrollTrigger:{
        trigger:"#foot",
        scroller:"#main",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2,
    }
})
tle
.from("#foot h1 span",{
    y:"-100%",
    stagger:-0.2
})
