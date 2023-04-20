import React, {useEffect, useMemo, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import ContentBox from "../../components/ContentBox/ContentBox";
import cl from '../Cinema/CinemaStyle.css'
import {getMoviesTop} from "../../function";
import Pagination from 'react-bootstrap/Pagination';
import {getGenre} from "../../http/userAPI";

const Cinema = () => {
    const [allContent, setAllContent] = useState([]);
    const [page, setPage] = useState(1);
    const [topFilms, setTopFilms] = useState(250);
    const [maxPages, setMaxPages] = useState(Math.ceil(topFilms/20));
    const [maineUrl, setMaineUrl] = useState(JSON.parse(localStorage.getItem(`whatUrl`)))

    useMemo(() => {
        getMoviesTop(`${maineUrl + page}`)
            .then(data => setAllContent(data.films))

    }, [page, topFilms])
    console.log(allContent)

    let items = [];
    for (let number = 1; number <= maxPages; number++) {
        items.push(
            <Pagination.Item
                onClick={() => {
                    setPage(number);
                    window.scrollTo(0, 0);
                }}
                key={number}
            >
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div className='cinema'>
            {
                allContent.map((content, index) => {
                    return <ContentBox info={content} key={index}/>
                })
            }
            <Pagination>{items}</Pagination>
        </div>
    );
};

export default Cinema;