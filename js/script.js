let menuBtn = document.querySelector('#menuBtn');
let menu = document.querySelector('.navbar .nav ul');
let layer = document.querySelector('.layer');
let counter = document.querySelector('#counter');
let plus = document.querySelector('#plus');
let moin = document.querySelector('#moin');
let shopBtn = document.querySelector('#shopBtn');
let carts = document.querySelector('#carts');

plus.addEventListener('click', plusCounter);
moin.addEventListener('click', moinCounter);
function plusCounter(){
    counter.innerHTML < 30 ? counter.innerHTML++ : '';
}
function moinCounter(){
    counter.innerHTML > 0 ? counter.innerHTML-- : '';
}

menuBtn.addEventListener('click', showMenu);
layer.addEventListener('click', showMenu);
function showMenu(){
    if(!menu.classList.contains('active')){
        menu.classList.add('active');
        layer.classList.add('active');
    }else{
        menu.classList.remove('active');
        layer.classList.remove('active');
    }
}
shopBtn.addEventListener('click', showCarts)

function showCarts(){
    carts.classList.toggle('active');
    shopBtn.classList.toggle('active');
}

                    /* SLIDER */

let sliderImgs = document.querySelectorAll('.carousel .slider img');
let sliderBullets = document.querySelectorAll('.carousel .slider-bullets li');
let currentSlide = 1;
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

next.addEventListener('click' ,()=>{
    currentSlide < sliderImgs.length ? currentSlide++ :  currentSlide=1;
    addActive();
})
prev.addEventListener('click' ,()=>{
    currentSlide > 1 ? currentSlide-- :  currentSlide=sliderImgs.length;
    addActive();
})

sliderBullets.forEach((bullet, index) => {
    bullet.onclick = () =>{
        currentSlide = index+1;
        addActive();
    };
});


function addActive(){
    removeActive();
    sliderImgs[currentSlide-1].classList.add('active');
    sliderBullets[currentSlide-1].classList.add('active');
}

function removeActive(){
    sliderImgs.forEach(img => {
        img.classList.remove('active');
    });
    sliderBullets.forEach(bullet => {
        bullet.classList.remove('active');
    });
}

/* ADD CARD TO CARTS */

