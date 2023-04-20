import axios from "axios";

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