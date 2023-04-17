import axios from "axios";

export async function getMoviesTop(url) {
    const response = await fetch(url, {
        headers: {
            "Content-Type": `application/json`,
            'X-API-KEY': process.env.API_KEY
        }
    })
    const resp = await response.json()
}