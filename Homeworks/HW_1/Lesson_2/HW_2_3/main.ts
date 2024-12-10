// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// Джордж Ре́ймонд Ри́чард Ма́ртин
type Author = {
    name: string;
    age: number;
};
type Book = {
    title: string;
    pageCount: number;
    genre: string;
    authors: Author[];
};

let firstBook: Book = {
    title: 'Гаррі Поттер',
    pageCount: 500,
    genre:'Фентезі',
    authors:[
        {name:'Джоан Роулінг', age: 59},
        {name:'Джоан Роулінг', age: 59}
    ]
}

let secondBook: Book = {
    title: 'Гра престолів',
    pageCount: 650,
    genre:'Фентезі',
    authors:[
        {name:'Джордж Мартін', age: 76},
        {name:'Джордж Мартін', age: 76}
    ]
}

let thirdBook: Book = {
    title: 'Гудзики та мереживо',
    pageCount: 430,
    genre:'Роман',
    authors:[
        {name:'Пенелопа Скай', age: 63},
        {name:'Пенелопа Скай', age: 63}
    ]
}
