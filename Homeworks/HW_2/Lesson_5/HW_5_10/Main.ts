// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


let minValue = (arr: number[]) => {
    let min = arr[0];
    for (const number of arr) {
        min = number;
    }
    return min;
}
 document.write(minValue([5, 8, 100, 2, -3, 55, 950, -120, 2]).toString());