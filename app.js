function loader() {
    let t1 = gsap.timeline();
    t1.to(".main", {
        position: "fixed",
        top: 0,
        duration: 0,

    })

    t1.from(".main-heading p .capital", {
        opacity: 0,
        duration: 0.3,
        stagger: -0.1
    })
    t1.from(".main-heading p .small", {
        opacity: 0,
        duration: 0.5,
        stagger: -0.1
    })
    t1.to(".loader", {
        duration: 0.3,
        opacity: 0,
        onComplete: () => {
            document.querySelector(".loader").style.display = "none"; 
        }
    })
    t1.from(".main-heading p", {
        y: 64,
        duration: 0.3,
    }, "anim")
    t1.from(".cards .line", {
        opacity: 0,
        y: 64,
        duration: 0.3,
    }, "anim")
    t1.from("nav", {
        opacity: 0,
        y: -60
    }, "anim")

    t1.to(".main", {    
        position: "static",
        duration: 0,
    });
    

}
document.addEventListener("DOMContentLoaded", () => {
    loader();
})
let city=["AFRICA","AMERICA","AUSTRALIA","CANADA","GERMANY","BRAZIL","QATAR"]
let i=0
document.querySelector(".card-3").addEventListener("mouseenter", () => {
    gsap.to(".absolute", { zIndex: 3 })
    gsap.to(".first", { zIndex: 2 ,duration:0})
    gsap.to(".card .inside-img", { zIndex: 4,duration:0 })
    deleteInterval=setInterval(()=>{
        if(i<city.length-1){
            i++
        }else{
            i=0
        }
        document.querySelector(".inside-img").innerHTML=city[i]
    },500)

})
document.querySelector(".card-3").addEventListener("mouseleave", () => {
    gsap.to(".first", { zIndex: 3 })
    gsap.to(".absolute", { zIndex: 2,duration:0 })
    gsap.to(".card .inside-img", { zIndex: 1,duration:0  })
    clearInterval(deleteInterval)

})