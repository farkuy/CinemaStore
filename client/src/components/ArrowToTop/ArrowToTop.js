import React, {useState} from 'react';

const ArrowToTop = () => {

    const [showArrow, setShowArrow] = useState(`hidden`)

    window.addEventListener(`scroll`, () => {
        if (window.scrollY > window.innerHeight / 2) {
            setShowArrow(`visible`)
        } else {
            setShowArrow(`hidden`)
        }
    })

    return (
        <a
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0)
            }
            }
            className="to-top"
            style={{visibility: `${showArrow}`}}
        />
    );
};

export default ArrowToTop;