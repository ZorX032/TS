// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(str) {
    if (str) {
        var split = str.split(' ');
        return split;
    }
    return [''];
}
var s = 'Ревуть воли як ясла повні';
var arr = stringToArray(s);
console.log(arr);
