import React from 'react';
import classes from './ComponentStyle/ListCard.css'

const ListCard = ({list}) => {
    return (
        <div>
            <ul class="list3a">
                {
                    list.map((item, index) => {

                    })
                }
            </ul>
        </div>
    );
};

export default ListCard;