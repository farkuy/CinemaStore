import React, {useContext} from 'react';
import {Col, Container} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import {Context} from "../index";

const StartPage = () => {

    const {user} = useContext(Context)

    console.log(user.isAuth)

    return (
       <div>
           Маты
       </div>
    );
};

export default StartPage;