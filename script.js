
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 0.8,
    getSpeed: true,
});

var elemC = document.querySelector(".projects");
var fixed = document.querySelector(".fixed-image");

elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})

fixed.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})

var elems = document.querySelectorAll(".project");
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

//earth video delay
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('myVideo');
    const delay = 4000; // Delay in milliseconds (e.g., 5000 ms = 5 seconds)
    
    setTimeout(() => {
        video.play();
    }, delay);
});

//loader animation

var loader = document.querySelector("#loader");

setTimeout(function(){
    loader.style.top = "-100%";
}, 4000)

//Link opener
document.getElementById("emailButton").addEventListener("click", function() {
    window.location.href = "mailto:satyendrakumar.contact@gmail.com";
});
document.getElementById("githubButton").addEventListener("click", function() {
    window.location.href = "http://github.com/Satyndr";
});

//about me animation
// var aboutme = document.querySelector('.aboutme')
// document.getElementById("aboutmeButton").addEventListener("click", function() {
//     aboutme.style.display = "block";
// });

document.getElementById('aboutmeButton').addEventListener('click', function() {
    var aboutMeDiv = document.querySelector('.aboutme');
    var cseDiv = document.querySelector('.page2-text');
    if (aboutMeDiv.classList.contains('visible')) {
        aboutMeDiv.classList.remove('visible');
        cseDiv.classList.remove('up');
    } else {
        aboutMeDiv.classList.add('visible');
        cseDiv.classList.add('up');
    }
});
