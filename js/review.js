// main.js

window.addEventListener('load',function(){

    var reviewLI = document.querySelectorAll(".review_bg > ul > li");

    for(var k=0; k<reviewLI.length; k++){
        reviewLI[k].addEventListener('click',function(){
            if (this.classList.contains("on")) {
                this.classList.remove('on');
            }else{
                this.classList.add('on');
            }
        });
    };

});