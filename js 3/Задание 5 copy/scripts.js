let number = prompt("Введите пятизначное число:");
if (number.length === 5 && !isNaN(number)) {
    let result = number.charAt(0) + number.charAt(1) + number.charAt(2) + number.charAt(4);
    alert("Результат: " + result);
} else {
    alert("Пожалуйста, введите корректное пятизначное число.");
}
