// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
function aarBuilder(arrayPrimitive) {
    document.write('<ul>');
    for (var _i = 0, arrayPrimitive_1 = arrayPrimitive; _i < arrayPrimitive_1.length; _i++) {
        var item = arrayPrimitive_1[_i];
        document.write("<li>".concat(item, "</li>"));
    }
    document.write('</ul>');
}
aarBuilder([2, 'lorem', true, 45, 'afjapksf', 4654, false]);
