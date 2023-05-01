import React, {useEffect, useState} from 'react';
import cl from './ContentBoxStyle.css'
import {CINEMA_ROUTE, FILM_PAGE} from "../../utils/consts";
import {convertToObjectFromAPISource} from "../../function";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ContentBox = ({info}) => {

    const [genres, setGenres] = useState('');
    const infoStandard = convertToObjectFromAPISource(info);

    const history = useNavigate();
    const dispatch = useDispatch();
    const urlList = useSelector(state => state.url.urlList)
    const urlOne = useSelector(state => state.urlOne.urlOne)

    useEffect(() => {
        let g = ``;
        for (let i of infoStandard.genres) {
            g += i.genre + ` `
        }
        setGenres(g)
    }, [])

    function getClassByRate(vote) {
        if (vote >= 7) {
            return "green";
        } else if (vote > 5) {
            return "orange";
        } else {
            return "red";
        }
    }


    return (
        <div
            onClick={(e) => {
                dispatch({type: `NEW_URL`, payload: JSON.stringify(infoStandard.kinopoiskId)})
                dispatch({type: `NEW_URL_LIST`, payload: JSON.stringify(urlList)})
                history(FILM_PAGE)
            }
        }
        >
            {
                Object.keys(info).length === 0
                    ? <div className={`ContentCard`}>da</div>
                    :
                        <div className={`movie`}>
                            <div className="movie__cover-inner">
                                <img className={'imageContent'} src={infoStandard.posterUrl} alt=""/>
                            </div>
                            <div className={`movie__info`}>
                                <div className={`movie__title`}>{infoStandard.nameRu}</div>
                                {infoStandard.year}
                                <div className={`movie__category`}>{genres}</div>
                                <div className={`movie__average movie__average--${
                                    getClassByRate(infoStandard.ratingKinopoisk)
                                }`}>{infoStandard.ratingKinopoisk}</div>
                            </div>

                     </div>
            }
        </div>
    );
};

export default ContentBox;