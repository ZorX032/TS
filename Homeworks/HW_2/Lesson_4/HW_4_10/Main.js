// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function minValue(arr) {
    var min = arr[0];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var number = arr_1[_i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
document.write(minValue([5, 8, 100, 2, -3, 55, 950, -120, 0]).toString());
