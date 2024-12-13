// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
var ulBuilder = function (liText) {
    document.write("<ul>\n                    <li>".concat(liText, "</li>\n                    <li>").concat(liText, "</li>\n                    <li>").concat(liText, "</li>\n                    </ul>"));
};
ulBuilder('lorem ipsum');
