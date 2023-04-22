import React, {useEffect, useMemo, useState} from 'react';
import ListCard from "./ListCard";
import cl from './ComponentStyle/ContentList.css'
import {getGenre} from "../http/userAPI";
import {filmsData, whatUrl} from "../data";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {CINEMA_ROUTE} from "../utils/consts";
import Cinema from "../pages/Cinema/ Cinema";
import {getKinopoiskGenre} from "../function";
const ContentList = () => {

    const [list, setList] = useState([]);
    const [nameList, setNameList] = useState(`Топ фильмов`);
    const [kpGenre, letKpGenre] = useState([])

    useEffect(() => {
        getKinopoiskGenre().then(a => {
            letKpGenre(a);
        })
    }, [])

    useMemo(() => {
        if (nameList === `Топ фильмов`) {
            setList(filmsData)
        }
        if (nameList === `Жанры`) {
            getGenre()
                .then(a => {
                    setList(a);

                })

        }

    }, [nameList])

    if (nameList === `Жанры`) {
        for (let i of kpGenre) {
            for (let j of list) {
                if (i.genre.toLowerCase() === j.name.toLowerCase()) {
                    j.kpId = i.id
                    console.log(j)
                }
            }
        }
    }
    

    return (
        <div>
            <h1>Списки и подборки фильмов</h1>
            <nav>

                <a
                    href="#"
                    onClick={() => setNameList('Топ фильмов')}
                >
                    Топ фильмов
                </a>
                <a href="#"
                   href="#"
                   onClick={() => setNameList('Жанры')}
                >
                    Жанры</a>
                <a href="#">По году выхода</a>
                <a href="#">По наградам</a>
                <div id="indicator"></div>
            </nav>
            {
                list.map((i, index) => {
                    return <div
                        onClick={(e) => {
                            localStorage.setItem(`whatUrl`, JSON.stringify(i.url))
                            document.location.href = CINEMA_ROUTE
                        }}
                    >{i.name}</div>
                })
            }


        </div>
    );
};

export default ContentList;