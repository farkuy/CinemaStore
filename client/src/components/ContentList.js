import React, {useEffect, useMemo, useState} from 'react';
import cl from './ComponentStyle/ContentList.css'
import {getGenre} from "../http/userAPI";
import {filmsData} from "../data";
import {CINEMA_ROUTE} from "../utils/consts";
import {getKinopoiskGenre} from "../function";
import {useDispatch, useSelector} from "react-redux";
const ContentList = () => {
    const dispatch = useDispatch()
    const urlList = useSelector(state => state.url.urlList)

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

    useMemo(() => {
        if (nameList === `Жанры`) {
            for (let i of kpGenre) {
                for (let j of list) {
                    if (i.genre.toLowerCase() === j.name.toLowerCase()) {
                        j.kpUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${i.id}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=`;
                    }
                }
            }
        }
    }, [nameList, list]);


    return (
        <div>
            {urlList}
            <h1>Списки и подборки фильмов</h1>
            <nav>

                <a
                    onClick={() => setNameList('Топ фильмов')}
                >
                    Топ фильмов
                </a>
                <a
                   onClick={() => setNameList('Жанры')}
                >
                    Жанры</a>
                <a>По году выхода</a>
                <a>По наградам</a>
                <div id="indicator"></div>
            </nav>
            {
                list.map((i, index) => {
                    return <div
                        onClick={async (e) => {
                            if (nameList === `Топ фильмов`) {
                                dispatch({type: 'NEW_URL_LIST', payload: i.url})
                                localStorage.setItem(`whatUrl`, JSON.stringify(i.url))
                                document.location.href = CINEMA_ROUTE
                            }
                            if (nameList === `Жанры`) {
                                localStorage.setItem(`whatUrl`, JSON.stringify(i.kpUrl))
                                document.location.href = CINEMA_ROUTE
                            }

                        }}
                    >{i.name}</div>
                })
            }


        </div>
    );
};

export default ContentList;