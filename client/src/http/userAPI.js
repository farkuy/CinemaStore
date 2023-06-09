import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const  {data} = await $host.post(`api/user/registration`, {email, password, role: `ADMIN`});
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post(`api/user/login`, {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async (email, password) => {
    const {data} = await $authHost.post(`api/user/auth`, {email, password, role: `ADMIN`})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getGenre = async () => {
    const  {data} = await $host.get(`api/type`);
    return await data
}