
window.addEventListener('load', start);

var red = null;
var green = null;
var blue = null;

function start(){
    red = document.querySelector('#red');
    green = document.querySelector('#green');
    blue = document.querySelector('#blue');
    getValue();
}

function getValue(){

    var redNum = document.querySelector('#redNum')
    var greenNum = document.querySelector('#greenNum');
    var blueNum = document.querySelector('#blueNum')
    var color = document.querySelector('#color');
    var rgb = null;

    function displayColor(){
        rgb = 'rgb('+redNum.value+','+greenNum.value+','+blueNum.value+')';
        color.style.backgroundColor = rgb;
    }
    
    red.addEventListener('change', function(){
        redNum.value = red.value;
        displayColor();
    }, false);
    
    green.addEventListener('change', function(){
        greenNum.value = green.value;
        displayColor();
    }, false);
    
    blue.addEventListener('change', function(){
        blueNum.value = blue.value;
        displayColor();
    }, false);
}