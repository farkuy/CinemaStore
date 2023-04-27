import React, {useEffect, useState} from 'react';
import {getMovies, getSequels} from "../function";

const SequelsList = ({id}) => {

    const [sequelList, setSequelList] = useState([]);

    useEffect(() => {
        getSequels(id)
            .then(b => setSequelList(b))
    }, [])

    return (
        <div>
            {
                sequelList.map((cont, index) => {
                    return <div>{cont.nameRu}</div>
                })
            }
        </div>
    );
};

export default SequelsList;