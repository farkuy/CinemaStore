import React, {useContext, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRotes} from "../routes";
import {Context} from "../index";
const AppRouter = () => {

    const {user} = useContext(Context);
    const [a, b] = useState(false)

    useEffect(() => {
        b(true)
    }, [user.isAuth])

    return (
        <Routes>
            {
                a && authRoutes.map(({path, component}) => {
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