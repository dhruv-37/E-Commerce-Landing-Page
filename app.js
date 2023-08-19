let cartBtn = document.querySelector('.cart');

cartBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.cart-box').classList.toggle('show-cart');
})

let productImages = document.querySelectorAll('.image');


for(productImg of productImages) {
    productImg.addEventListener('click', function() {
        let prevImg = document.querySelector('.currImg')
        let mainImg = document.querySelector('.main-photo img');
        let url = this.getAttribute('src');
        mainImg.setAttribute('src', url);
        prevImg.classList.remove('currImg');
        this.classList.add('currImg');
    })
}

let plusItem = document.querySelector('.plus');
let itemCount = 0;

plusItem.addEventListener('click', function() {
    if(itemCount < 99){
        itemCount++;
        document.querySelector('.amount-val').innerHTML = itemCount;
    }
})

let minusItem = document.querySelector('.minus');

minusItem.addEventListener('click', function() {
    if(itemCount != 0){
        itemCount--;
        document.querySelector('.amount-val').innerHTML = itemCount;
    }
})

let addToCart = document.querySelector('#add-item');

addToCart.addEventListener('click', function() {
    if(itemCount != 0){
        document.querySelector('.cart-main').style.display = "none";
        document.querySelector('.quant').innerHTML = itemCount;
        document.querySelector('.product-added').style.display = "block";
        document.querySelector('.total-cost').innerHTML =`$${125 * itemCount}`;
        document.querySelector('.badge').style.display = "flex";
    }else{
        document.querySelector('.product-added').style.display = "none";
        document.querySelector('.cart-main').style.display = "block";
        document.querySelector('.badge').style.display = "none";
    }
})

let deleteItem = document.querySelector('.delete');

deleteItem.addEventListener('click', function() {
    document.querySelector('.product-added').style.display = "none";
    document.querySelector('.cart-main').style.display = "block";
    document.querySelector('.badge').style.display = "none";
})

let cartBox = document.querySelector('.cart-box');

document.querySelector('body').addEventListener('click', function() {
    if(cartBox.classList.contains('show-cart')){
        cartBox.classList.remove('show-cart');
    }
})

cartBox.addEventListener('click', function(event) {
    event.stopPropagation();
})