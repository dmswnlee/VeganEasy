// main.js

window.addEventListener('load',function(){

    // 햄버거 버튼 클릭
    var mobBtn = document.querySelector(".mobBtn");
    var mob = document.querySelector(".mob");
    var mobClose = document.querySelector(".mobBtn_close");
    var bg = document.querySelector(".bg");

    mobBtn.addEventListener("click",function(){
        mob.classList.add("on");
        mobBtn.style.display = "none";
        bg.classList.add("on");
    });

    // 닫기 버튼 클릭
    mobClose.addEventListener("click",function(){
        mob.classList.remove("on");
        bg.classList.remove("on");
        mobBtn.style.display = "block"; 
    });

    // 오늘의 추천
    var today = document.querySelectorAll(".today > div");

    today.forEach(function(idx){
        idx.classList.add('on');
    });


});