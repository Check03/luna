//2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
//let a = Number (prompt("Введите число, чтобы на экране появились все числа от 0 до указанного в порядке убывания"))
//while ( 0 <= a ) {
//    document.write (a);
//    a--;
//    document.write (" ")
//}


//Ранее числа писались от большего к меньшего, в коде ниже можно установить от меньшего к большему. Для этого просто удалите "//" в коде ниже и поставьте "//" в коде выше

let a = Number (prompt("Введите число, чтобы на экране появились все числа от 0 до указанного в порядке возрастания"))
let i = 1
while (i<=a){
    document.write(i + " ")
    i++
}