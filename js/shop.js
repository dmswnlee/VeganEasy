// main.js

window.addEventListener('load',function(){

    var shop = document.querySelectorAll(".shop_bg > dl");
    var shopMenu = document.querySelectorAll(".shop_bg > ul");

    shop.forEach(function(idx){
        idx.classList.add('on');
    });

    shopMenu.forEach(function(idx){
        idx.classList.add('on');
    });

});

