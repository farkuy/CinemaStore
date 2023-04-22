import React from 'react';
import {Col, Container} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import {getKinopoiskGenre} from "../function";

const StartPage = () => {

    getKinopoiskGenre().then(a=> console.log(a))

    return (
       <div>
          <TypeBar/>
       </div>
    );
};

export default StartPage;