let menuBtn = document.querySelector('#menuBtn');
let menu = document.querySelector('.navbar .nav ul');
let layer = document.querySelector('.layer');
let shopBtn = document.querySelector('#shopBtn');
let carts = document.querySelector('#carts');

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
let sliderImgs2 = document.querySelectorAll('.carousel-2 .slider img');
let sliderBullets2 = document.querySelectorAll('.carousel-2 .slider-bullets li');
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let prev2 = document.querySelector(".carousel-2 .left");
let next2 = document.querySelector(".carousel-2 .right");
let count = document.querySelector("#count");

next.addEventListener('click' ,()=>{
    currentSlide < sliderImgs.length ? currentSlide++ :  currentSlide=1;
    addActive();
})
prev.addEventListener('click' ,()=>{
    currentSlide > 1 ? currentSlide-- :  currentSlide=sliderImgs.length;
    addActive();
})
next2.addEventListener('click' ,()=>{
    currentSlide < sliderImgs.length ? currentSlide++ :  currentSlide=1;
    addActive();
})
prev2.addEventListener('click' ,()=>{
    currentSlide > 1 ? currentSlide-- :  currentSlide=sliderImgs.length;
    addActive();
})

sliderBullets.forEach((bullet, index) => {
    bullet.onclick = () =>{
        currentSlide = index+1;
        addActive();
    };
});
sliderBullets2.forEach((bullet, index) => {
    bullet.onclick = () =>{
        currentSlide = index+1;
        addActive();
    };
});


function addActive(){
    removeActive();
    sliderImgs[currentSlide-1].classList.add('active');
    sliderBullets[currentSlide-1].classList.add('active');
    sliderImgs2[currentSlide-1].classList.add('active');
    sliderBullets2[currentSlide-1].classList.add('active');
    count.innerHTML = `${currentSlide<10 ? '0'+currentSlide:currentSlide}<span>/${sliderBullets.length<10 ? '0'+sliderBullets.length:sliderBullets.length}</span>`
}

function removeActive(){
    sliderImgs.forEach(img => {
        img.classList.remove('active');
    });
    sliderBullets.forEach(bullet => {
        bullet.classList.remove('active');
    });
    sliderImgs2.forEach(img => {
        img.classList.remove('active');
    });
    sliderBullets2.forEach(bullet => {
        bullet.classList.remove('active');
    });
}

/* ADD CARD TO CARTS */
let counter = document.querySelector('#counter');
let plus = document.querySelector('#plus');
let moin = document.querySelector('#moin');
let addToCartBtn = document.querySelector("#addToCartBtn");
let cart = document.querySelector("#cart");
let price = 149.99;

plus.addEventListener('click', plusCounter);
moin.addEventListener('click', moinCounter);

function plusCounter(){
    counter.innerHTML < 30 ? counter.innerHTML++ : '';
}
function moinCounter(){
    counter.innerHTML > 0 ? counter.innerHTML-- : '';
}

function deleteCart(el){
    if(cart.childElementCount > 1){
        el.parentElement.parentElement.remove()
    }else{
        el.parentElement.parentElement.remove()
        cart.innerHTML += `
            <div class="empty-cart">
                Your cart is empty
            </div>
        `;
    }
    shopNumber()
    // document.querySelector(".price").parentElement
}

addToCartBtn.addEventListener('click', addCart);

function addCart(){
    document.querySelector(".carts .cart .empty-cart")? document.querySelector(".carts .cart .empty-cart").remove() : null;
    document.querySelector(".carts .cart").innerHTML += `
    <div class="info">
    <div class="card">
    <div class="card-img">
    <img src="./image/product-1.png" alt="">
    </div>
    <div class="txt">
    <p>Meryl Lounge Chair<br>$${price} x ${counter.innerHTML} <span>$${price*parseFloat(counter.innerHTML)}</span></p>
    </div>
    <div class="delete" style="rotate: 45deg;cursor:pointer;" onclick=deleteCart(this)><img src="image/plus.svg" alt=""></div>
    </div>
    <div class="checkBtn btn"><a href="">Check out</a></div>
    </div>
    `;
    shopNumber()
}
function shopNumber(){
    let x = document.querySelectorAll(".cart .info").length;
    document.querySelector(".shop").style.setProperty("--count", x>0? `'${x}'`:'');
}

let closeCarosel2 = document.querySelector('#closeCarosel2');
let carosel2 = document.querySelector('.carousel-2');
let imgCarosel = document.querySelector('.images .carousel .slider');

imgCarosel.addEventListener('click', showCarosel2)
closeCarosel2.addEventListener('click', hideCarosel2);

function showCarosel2(){
    carosel2.classList.add('active')
}
function hideCarosel2(){
    carosel2.classList.remove('active')
}