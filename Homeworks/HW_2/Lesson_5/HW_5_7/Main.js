// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
var ulBuilder = function (liText, liCount) {
    document.write("<ul>");
    for (var i = 0; i < liCount; i++) {
        document.write("\n            <li>".concat(liText, "</li>"));
    }
    document.write("</ul>");
};
ulBuilder('lorem ipsum', 5);
