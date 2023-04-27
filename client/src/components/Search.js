import React, {useState} from 'react';
import {getSearch} from "../function";
import {CINEMA_ROUTE, CONTENT_LIST_ROUTE, CONTENT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const Search = () => {

    const [search, setSearch] = useState(``)
    const history = useNavigate();



    return (
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
                value={search}
                type="search" className="form-control form-control-dark" placeholder="Поиск..." aria-label="Search"
                onChange={(e) => {
                    e.preventDefault();
                    setSearch(e.target.value)
                }
            }
            />
            <button
                onClick={(e) => {
                    e.preventDefault();

                    let keyword = search;
                    let encodedKeyword = encodeURIComponent(keyword);
                    getSearch(encodedKeyword)
                        .then(a => localStorage.setItem(`urlList`, JSON.stringify(a)))
                        .then(v => console.log(JSON.parse(localStorage.getItem(`urlList`))))
                        .then(x => history(CINEMA_ROUTE))
                }
                }
            >
                кнопка делать запрос
            </button>
        </form>
    );
};

export default Search;