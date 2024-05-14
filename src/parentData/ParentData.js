import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const ParentData = () => {
    let data = useSelector((state) => state.parent.familydata);


    let parentin = useLocation()
    let navigate = useNavigate()
    let showChildren = data.family_tree.find((pa) => {
        if (parentin.state == pa.parent_id) {
            return true
        } else return false

    })



    const showParentNme = () => {
        navigate("/data", { state: { showChildren } })

    }
    return (
        <>
            <div className='my-20 flex justify-center w-full m-auto'>
                {< div >
                    <div className='border-2 border-black  '>

                        <div className='flex justify-center my-10 p-10' onClick={() => showParentNme()}> {showChildren.name}</div>

                    </div>

                </div>}
            </div >

        </>
    )
}

export default ParentData