import React from 'react'

import { useLocation } from 'react-router-dom';

const GrandParent = () => {

    let parentin = useLocation();

    let parent = parentin.state.parent;
    console.log(parent)

    return (
        <div className='my-40 grid justify-center text-3xl font-bold w-1/4 p-4 m-auto bg-red-500'>
            <div className='text-white'>Father</div>
            <div className='text-white'>{ }</div></div>
    )
}

export default GrandParent