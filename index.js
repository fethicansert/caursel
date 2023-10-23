const carousel = document.querySelector('.carousel');

let isDragging = false;
let startX;
let startScrollLeft;

carousel.scrollLeft = 1500;

const dragging = (e) => {
    // if(!isDragging) return;
    

    console.log(e.pageX);
    // console.log(e.pageX);
    // carousel.scrollLeft = startScrollLeft - (e.pageX - startX) ;
    // console.log(carousel.scrollLeft);
    carousel.scrollLeft = e.pageX;
    console.log( 'xs' + carousel.scrollLeft);
}

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging');

    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  
}

const dragFinish = (e) => {
    isDragging = false;
    carousel.classList.remove('dragging');
    console.log("startX " + startX);
    console.log( "startScorlLeft"+ startScrollLeft);
    console.log(' ');
}

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mousedown',dragStart);
document.addEventListener('mouseup',dragFinish);

