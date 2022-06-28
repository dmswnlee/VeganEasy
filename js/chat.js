// main.js

window.addEventListener('load',function(){

    var host = document.querySelectorAll(".host > ul > li");
    var user = document.querySelectorAll(".user > ul > li");
    var load = document.querySelector(".load-wrap");

    host.forEach(function(idx){
        idx.classList.add('on');
    });

    user.forEach(function(idx){
        idx.classList.add('on');
    });

    load.classList.add('on');
    load.classList.remove('on');
});