const store = document.getElementById('store');
const barraLateral = document.querySelector('.barra-lateral');
const spans = document.querySelectorAll('span');
const boton = document.querySelector('.switch');
const circulo = document.querySelector('.circulo');
const main = document.querySelector('main');
const images = document.querySelectorAll('.images');
const botonesCategoria = document.querySelectorAll('.botones-categoria');
const submenu = document.querySelectorAll('.item-submenu');

// submenu.forEach((sub => {
//     sub.addEventListener('click', ()=>{
        
//         sub.classList.toggle('arrow');

//         let height = 0;
//         let menu = sub.nextElementSibling;

//         if(menu.clientHeight == '0'){
//             menu.style.display = 'block'
//         } else {
//             menu.style.display = 'none'
//         }
//     })
// }))


//ACTIVE LINKS NAVBAR

function activeLink() {
    botonesCategoria.forEach(b => b.classList.remove('active-item'));
    this.classList.add('active-item');
}

botonesCategoria.forEach(b => b.addEventListener('click', activeLink));

//BARRA LATERAL

store.addEventListener('click', ()=>{
    barraLateral.classList.toggle('mini-barra-lateral');

    main.classList.toggle('min-main')
    
    spans.forEach((span)=>{
        span.classList.toggle('oculto');
    })
})

//DARK MODE

boton.addEventListener('click', ()=>{
    let body = document.body;

    body.classList.toggle('dark-mode');
    circulo.classList.toggle('prendido');
})

//MINI SLIDER BOTINES

function activeSlider() {
    images.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

images.forEach(l => l.addEventListener('click', activeSlider))

