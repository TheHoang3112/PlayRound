//slider
const sliderContainer = document.querySelector('.slider__container');
const slideLeft = document.querySelector('.slider__left');
const slideRight = document.querySelector('.slider__right');
const upButton = document.querySelector('.slider__up-button');
const downButton = document.querySelector('.slider__down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
upButton.addEventListener('click', () => {
    changeSlide('up');
})
downButton.addEventListener('click', () => {
    changeSlide('down');
})

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;

        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

//arrouw__btn-up
const topBtn = document.getElementById("btn-up");
console.log(topBtn);
window.onscroll = function () {
    scrollButton();
}
// When the user scrolls down 500px from the top of the document, show the button
function scrollButton() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
topBtn.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//navigation
const openBtn = document.querySelector('.navigation__open-btn');
const closeBtn = document.querySelector('.navigation__close-btn');
console.log(closeBtn);
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})
closeBtn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})