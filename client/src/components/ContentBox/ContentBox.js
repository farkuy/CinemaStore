import React, {useEffect, useState} from 'react';
import cl from './ContentBoxStyle.css'
import {CINEMA_ROUTE, FILM_PAGE} from "../../utils/consts";

const ContentBox = ({info}) => {

    const [genres, setGenres] = useState('');

    useEffect(() => {
        let g = ``;
        for (let i of info.genres) {
            g += i.genre + ` `

        }
        setGenres(g)
    }, [])


    return (
        <div
            onClick={(e) => {
                localStorage.setItem(`whatId`, JSON.stringify(info.filmId))
                document.location.href = FILM_PAGE}
            }

        >
            {
                Object.keys(info).length === 0
                    ? <div className={`ContentCard`}>da</div>
                    :
                        <div className={`image maineCard`}>
                            <img className={'imageContent'} src={info.posterUrl} alt=""/>
                            <div className={`ContentCard`}>
                                {info.rating}
                                <br/>
                                {info.year}
                                <br/>
                                {genres}
                            </div>

                     </div>


            }
        </div>
    );
};

export default ContentBox;