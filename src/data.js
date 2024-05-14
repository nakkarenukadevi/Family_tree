import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';

const Data = () => {

    let parentin = useLocation();

    let parent = parentin.state.showChildren;
    let navigate = useNavigate()

    const showgrandparent = () => {
        navigate("/grandparent", { state: { parent } })
    }

    return (
        <div className='my-40 grid justify-center text-3xl font-bold w-1/4 p-4 m-auto bg-red-500' onClick={() => { showgrandparent() }}>
            <div className='text-white'>Father</div>
            <div className='text-white'>{parent.parent_father}</div></div>
    )
}

export default Data