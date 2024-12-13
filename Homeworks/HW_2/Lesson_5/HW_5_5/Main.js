// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
var paragraphGeneration = function (text) { return document.write("<p>".concat(text, "</p>")); };
paragraphGeneration('lorem ipsum');
