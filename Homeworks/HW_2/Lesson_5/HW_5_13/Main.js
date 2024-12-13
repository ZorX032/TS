// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
var Currency = /** @class */ (function () {
    function Currency(currency, value) {
        this.currency = currency;
        this.value = value;
    }
    return Currency;
}());
var exchange = function (sumUAH, currencyValues, exchangeCurrency) {
    var chosenCurrency;
    for (var _i = 0, currencyValues_1 = currencyValues; _i < currencyValues_1.length; _i++) {
        var item = currencyValues_1[_i];
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    var result = sumUAH / chosenCurrency.value;
    return result;
};
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
