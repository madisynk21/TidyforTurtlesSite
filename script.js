

//handles clicking navigation menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach (n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
}))

//changes slideshow

var index = 0;
var time = 5000;
changeSlide();

function changeSlide(){
    var i;
    var slides = document.getElementsByClassName("slides")
    for (i=0; i< slides.length; i++){
        slides[i].style.display="none";
    }
    index++;
    if (index > slides.length){
        index=1;
    }
    slides[index-1].style.display="block";

    setTimeout(changeSlide, time);
}

