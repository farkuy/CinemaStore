import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRotes} from "../routes";
import {Context} from "../index";
const AppRouter = () => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {
                user.isAuth && authRoutes.map(({path, component}) => {
                    return <Route key={path} path={path} element={component}/>
                })
            }
            {
                publicRotes.map(({path, component}) => {
                    return <Route key={path} path={path} element={component}/>
                })
            }
        </Routes>
    );
};

export default AppRouter;