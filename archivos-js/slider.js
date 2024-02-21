let back = document.getElementById('btn-left');
let next = document.getElementById('btn-right');
let slider = document.getElementById('slider');
let sliderSection = document.querySelectorAll('.slider-section');
let botones = document.querySelectorAll('boton');


next.addEventListener('click', e => moveToRight());
back.addEventListener('click', e => moveToLeft());

let operacion = 0;
let widthImg = 100 / sliderSection.length;
let counter = 0;

setInterval(() => {
    moveToRight();
}, 5000);

function moveToRight(){

    if (counter >= sliderSection.length - 1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = 'none';
        return 
    } 
        
    counter++;

    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = 'all ease .6s'
    
}

function moveToLeft(){
    counter--;

    if (counter < 0){
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1); 
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = 'none';
        return 
    }

    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = 'all ease .6s'
   
}

