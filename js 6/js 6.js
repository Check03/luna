const buttonContain = document.getElementById('buttonContain');
const output = document.getElementById('output');
const drag = document.getElementById('drag');
const calc = document.getElementById('calc');

function moveCalc(event){
    calc.style.left = `${event.clientX - startX}px`;
    calc.style.top = `${event.clientY - startY}px`;
}

let startX, startY;

drag.addEventListener('mousemove', function(event){
    startX = event.clientX - calc.offsetLeft;
    startY = event.clientY - calc.offsetTop;
    document.addEventListener(' mousemove', moveCalc)
})

drag.addEventListener('mouseup', function(){  
    document.removeEventListener('mouseup', moveCalc)
})


let formula = '';

buttonContain.addEventListener('click', function(event){
    const value = event.target.value;
    if (event.target.value == '=') {
        formula = new Function('return' + formula)();
        output.innerText = formula;
    }
    else if (value == '+/-'){
        formula = -formula;
        output.innerText = formula;
    }
    else if (value == 'AC' ||value == 'C'){
        formula = '';
        output.innerText = '0';
    }
    else {
        formula += value;
        output.innerText = formula;
    }
}) 









