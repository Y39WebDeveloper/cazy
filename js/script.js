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