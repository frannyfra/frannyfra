const stopSlides = document.querySelector(".pause-button");
const playSlides = document.querySelector(".play-button");
const leftArrow = document.querySelector(".prev");
const rightArrow = document.querySelector(".next");

let slideIndex = 0;//first image is going to have index 0;


const showSlides = () => { //arrow function
    
    const slides = document.getElementsByClassName("mySlides"); //we grab all the elements with the same class;
    const dots = document.getElementsByClassName("dot");
    
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";//looping through them and setting the dislay as none- so we do not see them;
    }


    slideIndex++;//increment by one;

    if(slideIndex > slides.length) { //if the slideindex is bigger than the length of our slides- false;
        slideIndex = 1;
    }

    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");//looping through them and setting the dislay as none- so we do not see them;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    interval = setTimeout( showSlides , 3000);
};

//addition for right arrow

const moveSlidesToRight = () => { //arrow function
    
    const slides = document.getElementsByClassName("mySlides"); //we grab all the elements with the same class;
    const dots = document.getElementsByClassName("dot");
    
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";//looping through them and setting the dislay as none- so we do not see them;
    }


    slideIndex++;//increment by one;

    if(slideIndex > slides.length) { //if the slideindex is bigger than the length of our slides- false;
        slideIndex = 1;
    }

    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");//looping through them and setting the dislay as none- so we do not see them;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

};

//addition for left arrow 

const moveSlidesToLeft = () => { //arrow function
    
    const slides = document.getElementsByClassName("mySlides"); //we grab all the elements with the same class;
    const dots = document.getElementsByClassName("dot");
    
    for(let i = 0; i < slides.length; i) {
        slides[i].style.display = "none";//looping through them and setting the dislay as none- so we do not see them;
    }


    slideIndex--;//increment by one;

    if(slideIndex > slides.length) { //if the slideindex is bigger than the length of our slides- false;
        slideIndex = 1;
    }

    for(let i = 0; i < dots.length; i--) {
        dots[i].className = dots[i].className.replace(" active", "");//looping through them and setting the dislay as none- so we do not see them;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

};
showSlides();

// below is to pause the carousel

stopSlides.addEventListener("click", clicked => {
    clearTimeout(interval);
}) 

// below is to play the carousel when is paused 
playSlides.addEventListener("click", clicked => {
    setTimeout( showSlides, 3000);
})

// below is to make the right arrows move
rightArrow.addEventListener("click", press => {
    moveSlidesToRight();
})
   
//below is to make the left arrows move
leftArrow.addEventListener("click", press => {
    moveSlidesToLeft();
})





// automatic slideshow


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }


// when left or right arrow key is clicked, move slides and dots

// document.onkeydown = function(event) {
//   if (event.keyCode === 37) {
//     const currentSlide = track.querySelector(".currentSlide");
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = dotsNav.querySelector(".currentSlide");
//     const prevDot = currentDot.previousElementSibling;
//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//   } else if (event.keyCode === 39) {
//     const currentSlide = track.querySelector(".currentSlide");
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector(".currentSlide");
//     const nextDot = currentDot.nextElementSibling;
//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//   }
// };




