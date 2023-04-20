import React, {useMemo, useState} from 'react';
import {getMovies} from "../function";
import cl from './FilmPagesStyle.css'

const FilmPage = () => {

    const [filmInfo, setFilmInfo] = useState({});
    const [maineId, setMaineId] = useState(JSON.parse(localStorage.getItem(`whatId`)))


    useMemo(() => {
        getMovies(maineId)
            .then(a => setFilmInfo(a))
    }, [])

    return (
        <div className="wrapper">

            <div className="wrapper-col-1">
                <img src={filmInfo.posterUrl} alt="Логан (2017)"/>
            </div>

            <div className="wrapper-col-2">
                <h1 className="title">Логан (2017)</h1>
                <h6 className="subtitle">Logan 18+</h6>
                <p className="description">Теряющий неуязвимость Росомаха спасает девочку-мутанта. Жесткое и печальное
                    роуд-муви о старении супергероев</p>

                <div className="mb-40">
                    <a href="#" className="btn">Смотреть</a>
                </div>

                <ul className="params mb-40">
                    <li><span className="text-muted">Аудиодорожки</span> Русский, Русский 5.1, Английский, Английский
                        5.1
                    </li>
                    <li><span className="text-muted">Субтитры</span> Русские, Английские</li>
                    <li><span className="text-muted">Качество видео</span> <span><span
                        className="tag">Full HD</span></span></li>
                </ul>

                <h2>О фильме</h2>

                <ul className="params">
                    <li><span className="text-muted">Год производства</span> 2017</li>
                    <li><span className="text-muted">Страна</span> США</li>
                    <li><span className="text-muted">Жанр</span> <span><a href="#">фантастика</a>, <a
                        href="#">боевик</a>, <a href="#">триллер</a>, <a href="#">драма</a></span></li>
                    <li><span className="text-muted">Слоган</span> <span
                        className="text-muted">«Его время пришло»</span></li>
                    <li><span className="text-muted">Режиссер</span> Джеймс Мэнголд</li>
                    <li><span className="text-muted">Время</span>
                        <time className="text-muted">137 мин. / 02:17</time>
                    </li>
                </ul>
            </div>

            <div className="wrapper-col-3">
                <span className="rathing-main">7.6</span>
                <span className="rathing-counts">296 824 оценки</span>
                <a href="#" className="rathing-details">459 рецензий</a>
            </div>

        </div>
    );
};

export default FilmPage;