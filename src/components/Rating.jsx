import React from 'react';

function Rating() {
    const rate = 4;
    const stars = [];

    for (let index = 0; index < rate; index++) {
        stars.push(<div key={index} className='text-[.5rem]'>⭐</div>);
    }

    return <div className='flex mx-2 my-2'>{stars}</div>;
}

export default Rating;
