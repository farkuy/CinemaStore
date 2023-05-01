import React, {useMemo, useState} from 'react';
import {getSearch} from "../function";
import {CINEMA_ROUTE, CONTENT_LIST_ROUTE, CONTENT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Search = () => {

    const [search, setSearch] = useState(``)
    const history = useNavigate();

    const dispatch = useDispatch()
    const showModal = useSelector(state => state.url.urlList)

    return (
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
                value={search}
                type="search" className="form-control form-control-dark" placeholder="Поиск..." aria-label="Search"
                onChange={(e) => {
                    e.preventDefault();
                    setSearch(e.target.value);
                }}
                onKeyPress={(e) => {
                    if (e.code === 'Enter') {
                        e.preventDefault();
                        let keyword = search;
                        let encodedKeyword = encodeURIComponent(keyword);
                        getSearch(encodedKeyword)
                            .then(a => {
                                dispatch({type: `NEW_URL_LIST`, payload: JSON.stringify(a)})
                                history(CINEMA_ROUTE)
                            })
                    }
                }
                }
            />
        </form>
    );
};

export default Search;