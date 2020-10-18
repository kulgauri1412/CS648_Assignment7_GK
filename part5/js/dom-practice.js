/*eslint-env browser*/
//STEP 1
function show() {
    'use strict';
    alert("I have been clicked");
}

function fix()
{
//STEP 2
var button2 = document.getElementById('b2');
button2.onclick = show;

//STEP 3
var button3 = document.getElementById('b3');
button3.addEventListener('click', show);

//STEP 4
var button4 = document.getElementById('b4');
button4.addEventListener('click', function() {
    'use strict';
    alert("I have been clicked");
})

var button5 = document.getElementById('b5');
    button5.addEventListener('click', function() {
        alert('I have been clicked');
    });
}
//STEP 5
window.addEventListener('load', function() {
    'use strict';
    fix();
    
});