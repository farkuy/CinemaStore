import React, {useEffect, useMemo, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import axios from "axios";
import ContentBox from "../../components/ContentBox/ContentBox";
import cl from '../Cinema/CinemaStyle.css'
import {getMoviesTop} from "../../function";

const Cinema = () => {

    getMoviesTop(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`).then(r => console.log(r))
    const info = async () => {
        const movies = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`);
        return movies
    }
    const [allContent, setAllContent] = useState([]);

    useEffect(() => {
        const films = info();
        films.then(result => {
            setAllContent(result)
            console.log(result)
        })
    }, [])

    return (
        <div className='cinema'>
            {
                allContent.map((content, index) => {
                    return <ContentBox info={content} key={index}/>
                })
            }
        </div>
    );
};

export default Cinema;