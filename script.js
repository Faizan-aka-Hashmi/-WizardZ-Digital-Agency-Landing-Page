function pageoneAnimation() {

    var tl = gsap.timeline();
    tl.from("nav h1,nav h4 , nav button", {
        y: -30,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.2,
    })

    // debug: show whether the center heading exists
    console.log('center h1 elements:', document.querySelectorAll('#center-part1 h1'));

    tl.from("#center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
    })
    tl.from("#center-part1 p", {
        x: -200,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power2.out",
    })
    tl.from("#center-part1 button", {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
    })
    tl.from("#center-part2 img", {
        opacity: 0,
        duration: 0.5,
    }, "-=1")
    tl.from(".sectionone-bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.5,
    })
}
pageoneAnimation();
function sectiontwoAnimation(){

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sectiontwo",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            scrub: 2,
            end: "top -50%",
        }
    });
    
    tl2.from(".services", {
        y: 30,
        opacity: 0,
    })
    tl2.from(".elem.lineone.left", {
        x: -300,
        opacity: 0,
        duration: 1,
        delay: 0.5,
    },"firstTogether")
    tl2.from(".elem.lineone.right", {
        x: 300,
        opacity: 0,
        duration: 1,
        delay: 0.5,
    },"firstTogether")
    tl2.from(".elem.linetwo.left", {
        x: -300,
        opacity: 0,
        duration: 1,
        delay: 0.5,
    },"secondTogether")
    tl2.from(".elem.linetwo.right", {
        x: 300,
        opacity: 0,
        duration: 1,
        delay: 0.5,
    },"secondTogether")
}
sectiontwoAnimation();
function stringAnimation(){
    const path = document.querySelector("#string-path");
  const stringBox = document.querySelector("#string");
  
  const basePath = `M 20 100 Q 300 100 580 100`;

  stringBox.addEventListener("mousemove", (e) => {
    const rect = stringBox.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  

    const newPath = `M 20 100 Q ${x} ${y} 580 100`;

    gsap.to(path, {
      attr: { d: newPath },
      duration: 0.2,
      ease: "power3.out"
    });
  });

  stringBox.addEventListener("mouseleave", () => {
    gsap.to(path, {
      attr: { d: basePath },
      duration: 1.2,
      ease: "elastic.out(0.8, 0.2)"
    });
  });
}
stringAnimation();

function customcursor(){
    var cursor = document.querySelector("#cursor");
    var body = document.querySelector("body");
    body.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            duration : 1,
            ease : "back.out"
        })
    })
}
customcursor();