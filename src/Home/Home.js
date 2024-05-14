import React, { useEffect, useState } from 'react'
import mockdata from "../mockdata.json";
import { useSelector, useDispatch } from 'react-redux'
import { InitialfamilyData } from '../Store/familySlice';
import { Link } from 'react-router-dom';

const Home = () => {


    let [parentId, setParentId] = useState('')

    let dispatch = useDispatch()


    dispatch(InitialfamilyData(mockdata));



    return (

        <div>

            <div className='flex justify-center py-10 items-center text-2xl'>ParentId:<input type="text" onChange={(e) => setParentId(e.target.value)} value={parentId} className='border-2 p-3  border-black' />

                <Link to='parentdata' state={parentId} ><button className='bg-blue-800 py-3 px-4 mx-4 font-mono font-bold text-white rounded-lg' >Click</button></Link>
            </div>


        </div>
    )
}

export default Home