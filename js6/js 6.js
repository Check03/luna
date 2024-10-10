const buttonContain = document.getElementById('buttonContain');
const output = document.getElementById('output');
const drag = document.getElementById('drag');
const calc = document.getElementById('calc');

function moveCalc(event){
    calc.style.left = `${event.clientX - startX}px`;
    calc.style.top = `${event.clientY - startY}px`;
}

let startX;
let startY;

drag.addEventListener('mousedown', function(event) {
    startX = event.clientX - calc.offsetLeft;
    startY = event.clientY - calc.offsetTop;
    document.addEventListener('mousemove', moveCalc);
});


drag.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', moveCalc);
});


let formula = '';

buttonContain.addEventListener('click', function(event){
    if (event.target.value != undefined){
    if (event.target.value == '=') {
        formula = new Function('return ' + formula)();
        output.innerText = formula;
        console.log(`1`)
    }
    else if (event.target.value == '+/-'){
        formula = -formula;
        output.innerText = formula;
    }
    else if (event.target.value == 'AC' ||event.target.value == 'C'){
        formula = '';
        output.innerText = '0';
    }

    else {
        formula += event.target.value;
        output.innerText = formula;
    }}
}) 










