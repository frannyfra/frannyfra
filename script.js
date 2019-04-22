let slideIndex = 0; //first image is going to have index 0;

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

    setTimeout( showSlides , 3000);
};

showSlides();


