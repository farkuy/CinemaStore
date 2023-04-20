import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import cl from './Auth.css'
import {LOGIN_ROUTE, REGISTRATION_ROUTE, START_ROUTE} from "../../utils/consts";
import {Link, useLocation} from "react-router-dom";
import {login, registration} from "../../http/userAPI";
import {Context} from "../../index";
const Auth = () => {

    const {user} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
                user.setUser(user);
                user.setIsAuth(true);
            } else {
                data = await registration(email, password);
                user.setUser(user);
                user.setIsAuth(true);
            }
            document.location.href = START_ROUTE
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="dm-overlay dm-overlay-active" id="win1">
            <div className="dm-table">
                <div className="dm-cell">
                    <div className="dm-modal">
                            <h2>{isLogin ? `Авторизация` : `Регистрация`}</h2>
                            <Form className='d-flex flex-column'>
                                <Form.Control
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='mt-3'
                                    placeholder='Введите ваш email'
                                />
                                <Form.Control
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className='mt-3'
                                    placeholder='Введите пороль'
                                    type='password'
                                />
                            </Form>
                        <Row>
                            {
                                isLogin
                                    ?
                                    <div style={{display: `flex`}}>
                                        Нет аккаунта? <Link class="link-light" to={REGISTRATION_ROUTE}>Зарегистририруйтесь</Link>
                                    </div>
                                    :
                                    <div style={{display: `flex`}}>
                                       Есть аккаунт? <Link class="link-light" to={LOGIN_ROUTE}>Войдите</Link>
                                    </div>
                            }
                            <Button
                                className='mt-3'
                                onClick={click}
                            >
                                {
                                    isLogin
                                        ?
                                        `Войти`
                                        :
                                        `Зарегистрироваться`
                                }
                            </Button>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;