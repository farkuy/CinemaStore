import {getGenre} from "./http/userAPI";

export const REACT_APP_API_URL=`http://localhost:5000/`;

class filmsTop {
    constructor(url, name) {
        this.url = url;
        this.name = name;
    }
}

export class standardContentInfo {
    constructor(obj) {
        this._nameRu = obj.nameRu;
        this._nameOriginal = obj.nameOriginal;
        this._genres = obj.genres
        this._kinopoiskId = obj.kinopoiskId;
        this._ratingKinopoisk = obj.ratingKinopoisk;
        this._year = obj.year;
        this._countries = obj.countries;
        this._type = obj.type;
        this._posterUrl = obj.posterUrl;
        this._posterUrlPreview = obj.posterUrlPreview
    }

    get nameRu() {
        return this._nameRu
    }
    get nameOriginal() {
        return this._nameOriginal
    }
    get kinopoiskId() {
        return this._kinopoiskId
    }
    get genres() {
        return this._genres
    }
    get ratingKinopoisk() {
        return this._ratingKinopoisk
    }
    get year() {
        return this._year
    }
    get countries() {
        return this._countries
    }
    get type() {
        return this._type
    }
    get posterUrl() {
        return this._posterUrl
    }
    get posterUrlPreview() {
        return this._posterUrlPreview
    }
}

export const filmsData = [];
export const top_250_films = new filmsTop(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=`, `250 лучших фильмов за все время`);
filmsData.push(top_250_films)
export const top_100_popularFilms = new filmsTop(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=`, `100 самых популярных фильмов`);
filmsData.push(top_100_popularFilms)
export const top_await_films = new filmsTop(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=`, 'Самые ожидаемые фильмы');
filmsData.push(top_await_films);


