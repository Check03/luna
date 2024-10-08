const buttonContain = document.getElementById('buttonContain');
const output = document.getElementById('output');
const drag = document.getElementById('drag');
const calc = document.getElementById('calc');

function moveCalc(event){
    calc.style.left = `${event.clientX - startX}px`;
    calc.style.top = `${event.clientY - startY}px`;
}

let startX, startY;

drag.addEventListener('mousedown', function(event) {
    startX = event.clientX - calc.offsetLeft;
    startY = event.clientY - calc.offsetTop;
    document.addEventListener('mousemove', moveCalc);
});


document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', moveCalc);
});


let formula = '';

buttonContain.addEventListener('click', function(event) {
    const value = event.target.innerText; // Получаем текст на кнопке

    if (value === '=') {
        // Проверка формулы перед выполнением
        if (/^[\d\s()+\-*/.]+$/.test(formula) && formula !== '') {
            // Создание функции для вычисления выражения
            const result = new Function('return ' + formula)();
            output.innerText = result; // Вывод результата
            formula = ''; // Сброс формулы после вычисления
        } else {
            output.innerText = 'Error'; // Для недопустимых формул
            formula = ''; // Сброс формулы
        }
    } else if (value === '+/-') {
        formula = (-1 * parseFloat(formula)).toString(); // Изменение знака числа
        output.innerText = formula; // Обновление вывода
    } else if (value === 'AC' || value === 'C') {
        formula = ''; // Сброс формулы
        output.innerText = '0'; // Обновление вывода
    } else {
        formula += value; // Добавление значения к формуле
        output.innerText = formula; // Обновление вывода
    }
});









