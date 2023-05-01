import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import ContentBox from "../../components/ContentBox/ContentBox";
import cl from '../Cinema/CinemaStyle.css'
import cla from '../../components/ArrowToTop/ArrowStyle.css'
import {getMoviesTop} from "../../function";
import {getGenre} from "../../http/userAPI";
import {useDispatch, useSelector} from "react-redux";
import ArrowToTop from "../../components/ArrowToTop/ArrowToTop";

const Cinema = () => {
    const [allContent, setAllContent] = useState([]);
    const [page, setPage] = useState(0);
    const [topFilms, setTopFilms] = useState(250);
    const [maxPages, setMaxPages] = useState(Math.ceil(topFilms/20));
    const lastElement = useRef();
    const observer = useRef();
    const [isFilmsLoading, setIsFilmsLoading] = useState(false)

    const dispatch = useDispatch()
    const urlList = useSelector(state => state.url.urlList)
    const urlOne = useSelector(state => state.url.urlOne)

    useEffect(() => {
        if (isFilmsLoading) return;
        if (observer.current) observer.current.disconnect();
        const callback = (entr, observer) => {
            if (entr[0].isIntersecting) {
                console.log(page)
                setPage( page + 1)
            }

        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isFilmsLoading])

    useMemo(async () => {
        setIsFilmsLoading(true)
        try {
            if (typeof urlList === `object`) {
                setAllContent(urlList.films)
            }
            console.log(`${urlList + page}`)
            await getMoviesTop(`${urlList + page}`)
                .then(data => {
                    if (data.films){
                        setAllContent([ ...allContent, ...data.films])
                    }
                    if (data.items) {
                        const filmsArray = data.items.filter((content, index) => {
                            if (content.type === `FILM`) {
                                return content
                            }
                        })
                        setAllContent([ ...allContent, ...filmsArray])
                    }
                })
                .then(v => {
                    console.log(allContent)
                })
        } catch (e) {
            console.log(e)
        } finally {
            await setIsFilmsLoading(false)
        }
    }, [page, topFilms, urlList])

    return (
        <div className='cinema'>
            <ArrowToTop/>
            {
                allContent.map((content, index) => {
                    return <ContentBox info={content} key={index}/>
                })
            }
            <div ref={lastElement} style={{height: 20, background: `red`}}>

            </div>
        </div>
    );
};

export default Cinema;