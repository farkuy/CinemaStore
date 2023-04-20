import {getGenre} from "./http/userAPI";

export const REACT_APP_API_URL=`http://localhost:5000/`;

class filmsTop {
    constructor(url, name) {
        this.url = url;
        this.name = name;
    }
}
export const filmsData = [];
export const top_250_films = new filmsTop(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=`, `250 лучших фильмов за все время`);
filmsData.push(top_250_films)
export const top_100_popularFilms = new filmsTop(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=`, `100 самых популярных фильмов`);
filmsData.push(top_100_popularFilms)
export const top_await_films = new filmsTop(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=`, 'Самые ожидаемые фильмы');
filmsData.push(top_await_films);


