"use strict";

//УСЛОВИЯ

/* if (4 == 1) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); */


/* const num = 50; */

/* switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
} */

// ЦИКЛЫ



/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* let num = 50; */

/* do {
    console.log(num);
    num++;
}
while (num < 55); */
/* 
for (let i = 1; i < 9; i++) {
    if (i === 6) { */
        /* break; */
/*         continue;
    }
    console.log(i);
} */

//сам.раб

/* do {
    const a = prompt('Один из последних просметренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          num++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        num--;
    }
}
while(num < 2); */

/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello world!");
console.log(num); */

/* function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(8, 3));
console.log(calc(10, 8)); */

/* function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => {return a + b}; */

//CALLBACK

function first() {
    //Do something
    setTimeOut(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);