/* Задание на урок:

1) Создать переменную numberOfFilms и нее поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать обьекты personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой обьект
    - actors - тоже поместить пустой обьект
    - genres - сюда поместить пустой массив
    - private - в это свойств поместить boolean(логический) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просметренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в обьекты movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли

*/ 

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просметренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просметренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);