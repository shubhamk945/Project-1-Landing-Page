const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
})

// Cursor

function mouseCursor(){
    window.addEventListener("mousemove",function(dets){
        let cursor = document.querySelector(".cursor")
        cursor.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    })
}

function firstPageAnimation(){
    let tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".bounding-elem", {
        y: "0",
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1,
        stagger: 0.3
    })
    .from(".hero-footer", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
    
}

function elemImageHover(){
    document.querySelectorAll('.elem').forEach(function(elem){

        elem.addEventListener('mouseleave', function(){
            gsap.to(elem.querySelector('img'), {
                opacity: 0,
                ease: Power3
            })

            gsap.to(elem.querySelector('.text-elem'),{
                opacity: 0.7,
                ease: Power3,
                x : 0
                
            })
        })
        
        let rotate = 0;
        let diffRotate = 0;
        elem.addEventListener('mousemove', function(dets){

            let diff = dets.clientY - elem.getBoundingClientRect().top;

            diffRotate = dets.clientX - rotate;
            rotate = dets.clientX;

            gsap.to(elem.querySelector('img'), {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffRotate * 0.5)
            })

            gsap.to(elem.querySelector('.text-elem'),{
                opacity: 0.1,
                ease: Power3,
                x :60

            })
        })
    })
}

mouseCursor();
firstPageAnimation();
elemImageHover();
    