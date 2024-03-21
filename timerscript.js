var timer;
var ele = document.getElementById('timer');

(function(){
    var time = 0;
    timer =setInterval(() =>{
        ele.innerHTML = '' +time;
        time++;
    },1000)
})()