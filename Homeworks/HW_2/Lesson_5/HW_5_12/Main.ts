// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr: number[], index1: number, index2: number) => {

        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;

    return arr;
}

console.log(swap([5, 10, 15, 20, 30], 2, 1));