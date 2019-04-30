const stopSlides = document.querySelector(".pause-button");
const playSlides = document.querySelector(".play-button");
const leftArrow = document.querySelector(".prev");
const rightArrow = document.querySelector(".next");

let slideIndex = 0;//set the slideIndex to 0-first image is going to have an idex of 0;
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

    interval = setTimeout( showSlides , 2000);
};

showSlides();

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

const moveSlidesToLeft = () => { 
    //arrow function
     
    const slides = document.getElementsByClassName("mySlides"); //we grab all the elements with the same class;
    const dots = document.getElementsByClassName("dot");

    
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";//looping through them and setting the dislay as none- so we do not see them;
    }


    slideIndex--;//increment by one;

    console.log(slideIndex);

    if(slideIndex > slides.length) { //if the slideindex is bigger than the length of our slides- false;
        slideIndex = 0;
    }

    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");//looping through them and setting the dislay as none- so we do not see them;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

};

// below is to pause the carousel
stopSlides.addEventListener("click", clicked => {
    clearTimeout(interval);
}) 

// // below is to play the carousel when is paused 
playSlides.addEventListener("click", clicked => {
    setTimeout( showSlides, 2000);
})

// below is to make the right arrows move
rightArrow.addEventListener("click", press => {
    moveSlidesToRight();
})
   
//below is to make the left arrows move
leftArrow.addEventListener("click", press => {
    moveSlidesToLeft();
})





