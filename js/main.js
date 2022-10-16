var form  = document.querySelector('.form');
var form2 = document.querySelector('.form2');
var input = document.querySelector('.input');
var input2 = document.querySelector('.input2');
var text = document.querySelector('.text');
var text2 = document.querySelector('.text2');
var dollar = document.querySelector('.dollar');
var som = document.querySelector('.som');

form.addEventListener('submit', function(envt){
    envt.preventDefault()
    text.textContent = input.value * 11000 + ' Som'
    input.value = ''
})
form2.addEventListener('submit', function(envt){
    envt.preventDefault()
    text2.textContent = input2.value / 11000 + ' $'
    input2.value = ''
})