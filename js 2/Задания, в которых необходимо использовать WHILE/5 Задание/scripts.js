//5. Посчитать факториал введенного пользователем числа.
let a = Number (prompt("Введите число, чтобы посчитать его факториал")) 
let b = a; 
    while(a > 1){  
        b = b * (a-1);
        a--;
    }
    document.write("Факториал вашего числа = " + b)