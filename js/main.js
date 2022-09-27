'use strict';

// Находим рекламу и удаляем ее
const ads = document.querySelector('.ads');
ads.remove();

// Находим все нужное
const bookDescription = document.querySelectorAll('.props__list');
const bookTitle = document.querySelectorAll('.item__title');
const book = document.querySelectorAll('.item');
const bookImages = document.querySelectorAll('.item__image');

// Переставляем книги местами
book[0].before(book[1]);
book[1].after(book[2]);
book[2].after(book[3]);

// Переставляем заголовки книг
bookImages[2].after(bookTitle[3]);
bookImages[5].after(bookTitle[1]);
bookImages[4].after(bookTitle[4]);

// Переставляем описания книг
bookTitle[4].after(bookDescription[3]);
bookTitle[2].after(bookDescription[4]);

// Переставляем перемешанные описания книг
bookDescription[0].children[2].after(bookDescription[2].children[3]);
bookDescription[2].append(bookDescription[5].children[8],
    bookDescription[5].children[9]);

// Переименовываем названия книги
bookTitle[2].textContent = 'This и прототипы объектов';

// Чиним классы у первой книги
const firstBook = document.getElementsByName('title-items');
firstBook[0].classList.add('item__title');
