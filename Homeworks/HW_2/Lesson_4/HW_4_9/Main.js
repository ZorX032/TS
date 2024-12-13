// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
var User = /** @class */ (function () {
    function User(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return User;
}());
function objectArrBuilder(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        document.write("<div>".concat(user.id, " ").concat(user.name, " ").concat(user.age, " </div>"));
    }
}
objectArrBuilder([
    { id: 1, name: 'Alex', age: 25 },
    { id: 2, name: 'Vasya', age: 30 },
    { id: 3, name: 'Petya', age: 18 },
    { id: 4, name: 'Anton', age: 22 },
]);
