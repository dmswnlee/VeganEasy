// main.js

window.addEventListener('load',function(){

    // 필터 버튼 클릭
    var filterBtn = document.querySelector(".filterBtn");
    var filter = document.querySelector(".filter");
    var bg = document.querySelector(".bg");
    var filterClose = document.querySelector(".filter_close");

    filterBtn.addEventListener("click",function(){
        filter.classList.add("on");
        bg.classList.add("on");
    });

    // 닫기 버튼 클릭
    filterClose.addEventListener("click",function(){
        filter.classList.remove("on");
        bg.classList.remove("on");
    });

    // 필터
    var category = document.querySelectorAll(".category > li > a");

    for(var k=0; k<category.length; k++){
        category[k].addEventListener('click',function(){
            category.forEach(function(idx){
                idx.classList.remove('on');
            });
            this.classList.add('on');
        });
    };

    var food = document.querySelectorAll(".food > li");

    for(var k=0; k<food.length; k++){
        food[k].addEventListener('click',function(){
            if (this.classList.contains("on")) {
                this.classList.remove('on');
            }else{
                this.classList.add('on');
            }
        });
    };

    var range = document.querySelectorAll(".range > li");

    for(var k=0; k<range.length; k++){
        range[k].addEventListener('click',function(){
            if (this.classList.contains("on")) {
                this.classList.remove('on');
            }else{
                this.classList.add('on');
            }
        });
    };

    // 레시피 종류 클릭
    var menu = document.querySelectorAll(".menu > li > a");

    for(var k=0; k<menu.length; k++){
        menu[k].addEventListener('click',function(){
            menu.forEach(function(idx){
                idx.classList.remove('on');
            });
            this.classList.add('on');
        });
    };

    // 레시피 메뉴
    var rMenu = document.querySelectorAll(".recipe_bg > div > ul");

    rMenu.forEach(function(idx){
        idx.classList.add('on');
    });

});