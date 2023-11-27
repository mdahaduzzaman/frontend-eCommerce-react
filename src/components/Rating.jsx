import React from 'react';
import { FaStar } from "react-icons/fa";

function Rating() {
    const rate = 4;
    const stars = [];

    for (let index = 0; index < rate; index++) {
        stars.push(<div key={index} ><FaStar/></div>);
    }

    return <div className='flex my-2'>{stars}</div>;
}

export default Rating;
