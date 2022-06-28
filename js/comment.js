// main.js

window.addEventListener('load',function(){

    var comment = document.querySelectorAll(".comment_bg > dl");

    comment.forEach(function(idx){
        idx.classList.add('on');
    });

});