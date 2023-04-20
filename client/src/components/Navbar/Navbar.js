import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE, ADMIN_ROUTE} from "../../utils/consts";
import cl from './NavbarSryle.css'
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {

    const {user} = useContext(Context)
    
    const logOut = () => {
      user.setUser({});
      user.setIsAuth(false)
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                {
                    user.isAuth ?
                        <Nav className="me-auto">
                            <Nav.Link><Link className={`link`} to={ADMIN_ROUTE}>Панель адмиристратора</Link></Nav.Link>
                            <Button
                                onClick={logOut}
                            >
                                Выход
                            </Button>
                        </Nav>
                        :
                        <Nav className="me-auto">
                            <Button
                                onClick={() => user.setIsAuth(true)}
                            >
                                <Link class="link-light" to={LOGIN_ROUTE}>Войдите в профиль</Link>
                            </Button>
                        </Nav>
                }


            </Container>
        </Navbar>
    );
});

export default NavBar;