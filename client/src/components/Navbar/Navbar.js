import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, ADMIN_ROUTE, CONTENT_LIST_ROUTE, PROFILE_ROUTE, START_ROUTE} from "../../utils/consts";
import cl from './NavbarSryle.css'
import {observer} from "mobx-react-lite";
import Search from "../Search";
import * as PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

function Redirect(props) {
    return null;
}

Redirect.propTypes = {to: PropTypes.string};
const NavBar = observer(() => {

    const history = useNavigate();
    const {user} = useContext(Context)

    const dispatch = useDispatch()
    const redirectPath = useSelector(state => state.auth.redirectPath);

    const logOut = () => {
      user.setUser({});
      user.setIsAuth(false)
    }

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Nav.Link className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <Link to={START_ROUTE}>
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use href="#bootstrap"></use>
                            </svg>
                        </Link>
                    </Nav.Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary"
                               onClick={(e) => history(CONTENT_LIST_ROUTE)}
                        >
                            Фильмы
                        </a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Сериалы</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Спорт</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Билеты в кино</a></li>
                    </ul>

                    <Search/>

                    {
                        user.isAuth ?
                            <Nav className="me-auto">
                                <Nav.Link><Link className={`link`} to={ADMIN_ROUTE}>Панель адмиристратора</Link></Nav.Link>
                                <Nav.Link><Link className={`link`} to={PROFILE_ROUTE}>Профиль</Link></Nav.Link>
                                <Button
                                    onClick={() => {
                                        logOut();
                                    }}
                                >
                                    Выход
                                </Button>
                            </Nav>
                            :
                            <Nav className="me-auto">
                                <Button
                                    className={`btn btn-warning`}
                                    onClick={() => {
                                        dispatch({type: 'SHOW_AUTH', payload: `dm-overlay-active`})
                                        history(LOGIN_ROUTE)
                                    }}
                                >
                                    Войди
{/*
                                    <Link class="link-light" to={LOGIN_ROUTE}>Войдите в профиль</Link>
*/}
                                </Button>
                            </Nav>

                    }
                </div>
            </div>
        </header>
    );
});

export default NavBar;