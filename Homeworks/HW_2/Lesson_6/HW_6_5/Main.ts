// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str: string): string[] {
    if (str){
        const split: string[] = str.split(' ');
        return split;
    }
    return [''];
}

let s: string = 'Ревуть воли як ясла повні';
let arr: string[] = stringToArray(s);
console.log(arr);
