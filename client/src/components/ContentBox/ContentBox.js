import React, {useEffect, useState} from 'react';
import cl from './ContentBoxStyle.css'

const ContentBox = ({info}) => {

    const [genres, setGenres] = useState('');

    useEffect(() => {
        let g = ``;
        for (let i of info.genres) {
            g += genres

        }
        setGenres(g)
    }, [])


    return (
        <div>
            {
                Object.keys(info).length === 0
                    ? <div className={`ContentCard`}>da</div>
                    :
                        <div className={`image maineCard`}>
                            <img className={'imageContent'} src={info.medium_cover_image} alt=""/>
                            <div className={`ContentCard`}>
                                {info.title}
                                {info.year}
                                {genres}
                            </div>

                     </div>


            }
        </div>
    );
};

export default ContentBox;