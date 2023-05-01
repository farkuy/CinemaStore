import React, {useEffect, useMemo, useState} from 'react';
import cl from './ComponentStyle/ContentList.css'
import {getGenre} from "../http/userAPI";
import {filmsData} from "../data";
import {CINEMA_ROUTE} from "../utils/consts";
import {getKinopoiskGenre} from "../function";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
const ContentList = () => {

    const [list, setList] = useState([]);
    const [nameList, setNameList] = useState(`Топ фильмов`);
    const [kpGenre, letKpGenre] = useState([])

    const history = useNavigate();
    const dispatch = useDispatch()
    const showModal = useSelector(state => state.url.urlList)

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
                    return <a href="#">
                        <div
                            onClick={async (e) => {
                                if (nameList === `Топ фильмов`) {
                                    dispatch({type: `NEW_URL_LIST`, payload: JSON.stringify(i.url)})
                                    history(CINEMA_ROUTE)
                                }
                                if (nameList === `Жанры`) {
                                    dispatch({type: `NEW_URL_LIST`, payload: JSON.stringify(i.kpUrl)})
                                    history(CINEMA_ROUTE)
                                }

                            }}
                        >{i.name}</div>
                    </a>
                })
            }


        </div>
    );
};

export default ContentList;