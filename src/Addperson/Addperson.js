import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewPerson } from '../Store/familySlice';
import { useNavigate } from 'react-router-dom';

const Addperson = () => {

    let [addperson, setAddPerson] = useState({
        parent_id: "",
        name: " ",
        parent_relation: "",
        parent_father: ""

    })
    let navigate = useNavigate()
    let dispatch = useDispatch();

    const handleaddNewPerson = () => {
        dispatch(addNewPerson(addperson))
        navigate("/")
    }
    return (
        <div className='flex justify-center m-auto border-2 border-black  mt-10 p-10 rounded-lg bg-orange-400'>
            <div>
                <h1 className='text-3xl font-sans font-extrabold text-center mb-5 '>Add person </h1>
                <div >
                    <div className='flex justify-between items-center m-3  font-sans font-bold'>
                        <div>      <label>Id</label> </div>
                        <div>    <input type="text" onChange={(e) => { setAddPerson({ ...addperson, parent_id: e.target.value }) }} value={addperson.parent_id} className='border-2 border-black p-3' /></div>

                    </div>
                    <div className='flex justify-between items-center m-3  font-sans font-bold'>
                        <div> <label>Name</label></div>
                        <div><input type="text" onChange={(e) => { setAddPerson({ ...addperson, name: e.target.value }) }} value={addperson.name} className='border-2 border-black p-3' /></div>

                    </div>
                    <div className='flex justify-between items-center m-3  font-sans font-bold'>
                        <div>    <label>Father Name</label></div>
                        <div> <input type="text" onChange={(e) => { setAddPerson({ ...addperson, parent_father: e.target.value }) }} value={addperson.parent_father} className='border-2 border-black p-3' /></div>

                    </div>
                    <div className='flex justify-between items-center m-3  font-sans font-bold'>
                        <div><label>Relation</label> </div>
                        <div> <input type="text" onChange={(e) => { setAddPerson({ ...addperson, parent_relation: e.target.value }) }} value={addperson.parent_relation} className='border-2 border-black p-3' /></div>

                    </div>
                    <div className=' text-center'><button className='py-3 bg-blue-800 text-white font-bold  px-4' onClick={() => handleaddNewPerson()}>Add person</button></div>
                </div>
            </div>


        </div>
    )
}

export default Addperson