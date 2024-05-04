
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector(".projects");
var fixed = document.querySelector(".fixed-image");

elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".project");
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})


//swiper code

var swip = document.querySelector(".mySwiper");

var swiper = new Swiper(".mySwiper", {
    slidesPerView: getSlide(),
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

function getSlide(){
    if(window.innerWidth <= 600){
        return 1.3;
    }
    slide = swip.getAttribute("slideno");
    return slide;
}

//footer made accessible
// page5 = document.querySelector(".page5");
// foot = document.querySelector('#footer');

// page5.addEventListener("mouseenter", function(){
//     foot.style.zIndex = "100";
// })
// page5.addEventListener("mouseleave", function(){
//     foot.style.zIndex = "-1";
// })


//loader animation

var loader = document.querySelector("#loader");

setTimeout(function(){
    loader.style.top = "-100%";
}, 4000)