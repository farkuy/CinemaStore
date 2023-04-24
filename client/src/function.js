import axios from "axios";
import {standardContentInfo} from "./data";

export async function getMoviesTop(url) {
    const response = await fetch(url, {
        headers: {
            "Content-Type": `application/json`,
            'X-API-KEY': `80eb4d7c-151a-4371-8c72-3a3796eedc44`
        }
    })
    const resp = await response.json();
    return resp
}

export async function getMovies(id) {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        headers: {
            "Content-Type": `application/json`,
            'X-API-KEY': `80eb4d7c-151a-4371-8c72-3a3796eedc44`
        }
    })
    const resp = await response.json();
    return resp
}

export async function getKinopoiskGenre() {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`, {
        headers: {
            "Content-Type": `application/json`,
            'X-API-KEY': `80eb4d7c-151a-4371-8c72-3a3796eedc44`
        }
    })
    const resp = await response.json();
    return resp.genres
}

export function convertToObjectFromAPISource(apiObject) {
    const filmInfo = {};
    if (apiObject.hasOwnProperty('kinopoiskId')) {
        filmInfo.kinopoiskId = apiObject.kinopoiskId;
    } else if (apiObject.hasOwnProperty('filmId')) {
        filmInfo.kinopoiskId = apiObject.filmId;
    }

    if (apiObject.hasOwnProperty('nameRu')) {
        filmInfo.nameRu = apiObject.nameRu;
    }

    if (apiObject.hasOwnProperty('genres')) {
        filmInfo.genres = apiObject.genres;
    }

    if (apiObject.hasOwnProperty('nameOriginal')) {
        filmInfo.nameOriginal = apiObject.nameOriginal;
    } else if (apiObject.hasOwnProperty('nameEn')) {
        filmInfo.nameOriginal = apiObject.nameEn;
    }

    if (apiObject.hasOwnProperty('rating')) {
        filmInfo.ratingKinopoisk = apiObject.rating;
    } else if (apiObject.hasOwnProperty('ratingKinopoisk')) {
        filmInfo.ratingKinopoisk = apiObject.ratingKinopoisk;
    }

    if (apiObject.hasOwnProperty('year')) {
        filmInfo.year = apiObject.year;
    }

    if (apiObject.hasOwnProperty('countries')) {
        filmInfo.countries = apiObject.countries;
    }

    if (apiObject.hasOwnProperty('type')) {
        filmInfo.type = apiObject.type;
    } else {
        filmInfo.type = 'FILM'
    }

    if (apiObject.hasOwnProperty('posterUrl')) {
        filmInfo.posterUrl = apiObject.posterUrl;
    }

    if (apiObject.hasOwnProperty('posterUrlPreview')) {
        filmInfo.posterUrlPreview = apiObject.posterUrlPreview;
    }

    return new standardContentInfo(filmInfo);
}
