// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


class Currency{
    currency: string;
    value: number;


    constructor(currency: string, value: number) {
        this.currency = currency;
        this.value = value;
    }
}

function exchange(sumUAH: number, currencyValues:Currency[], exchangeCurrency: string): number {
    let chosenCurrency: Currency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    let result: number = sumUAH / chosenCurrency.value;
    return result;
}

document.write(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD').toString());

