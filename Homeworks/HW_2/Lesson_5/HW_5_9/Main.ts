// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.

class User{
    id: number;
    name: string;
    age: number;


    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

let objectArrBuilder = (users: User[]) =>{
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}

objectArrBuilder([
    {id: 1, name: 'Alex', age: 25},
    {id: 2, name: 'Vasya', age: 30},
    {id: 3, name: 'Petya', age: 18},
    {id: 4, name: 'Anton', age: 22},
]);