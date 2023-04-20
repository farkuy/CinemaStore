import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, ListGroup} from "react-bootstrap";
import {CONTENT_LIST_ROUTE} from "../utils/consts";

const TypeBar = () => {
    const {content} = useContext(Context)


    return (
        <ListGroup>
            <ListGroup.Item>Главная</ListGroup.Item>
            <ListGroup.Item>
                <Button
                    onClick={(e) => document.location.href = CONTENT_LIST_ROUTE}
                >
                    Фильмы
                </Button>
            </ListGroup.Item>
            <ListGroup.Item>Сериалы</ListGroup.Item>
            <ListGroup.Item>Спорт</ListGroup.Item>
            <ListGroup.Item>Билеты в кино</ListGroup.Item>
        </ListGroup>
    );
};

export default TypeBar;