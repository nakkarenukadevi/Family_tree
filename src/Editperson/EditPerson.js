import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { InitialfamilyData } from '../Store/familySlice';

const EditPerson = () => {
    let data = useSelector((da) => da.parent);
    let person = useLocation();
    let EditPerson = person.state.key;
    let [editPerson, setEditperson] = useState(EditPerson.person);
    let dispatch = useDispatch();
    let navigate = useNavigate()

    const editPersonHandle = () => {

        let eperson = data.familydata.map((per) => {
            if (per.name === editPerson.name) {
                return { ...per, ...editPerson }
            } return per
        });
        console.log(eperson)
        navigate("/")
        dispatch(InitialfamilyData(eperson))

    }
    return (
        <div className='flex justify-center m-auto border-2 border-black  mt-10 p-10 rounded-lg bg-orange-400'>
            <div>

                <div >
                    <div className='flex justify-between items-center m-3  font-sans font-bold'>
                        <div>      <label>Id</label> </div>
                        <div>    <input type="text" onChange={(e) => { setEditperson({ ...editPerson, parent_id: e.target.value }) }} value={editPerson.parent_id} className='border-2 border-black p-3' /></div>

                    </div>
                    <div className='flex justify-between items-center m-3  font-sans font-bold'>
                        <div> <label>Name</label></div>
                        <div><input type="text" onChange={(e) => { setEditperson({ ...editPerson, name: e.target.value }) }} value={editPerson.name} className='border-2 border-black p-3' /></div>

                    </div>
                    <div className='flex justify-between items-center m-3  font-sans font-bold'>
                        <div>    <label>Father Name</label></div>
                        <div> <input type="text" onChange={(e) => { setEditperson({ ...editPerson, father: e.target.value }) }} value={editPerson.father} className='border-2 border-black p-3' /></div>

                    </div>
                    <div className='flex justify-between items-center m-3  font-sans font-bold'>
                        <div><label>Relation</label> </div>
                        <div> <input type="text" onChange={(e) => { setEditperson({ ...editPerson, relation: e.target.value }) }} value={editPerson.relation} className='border-2 border-black p-3' /></div>

                    </div>
                    <div className=' text-center'><button className='py-3 bg-blue-800 text-white font-bold  px-4' onClick={() => editPersonHandle()}>Add person</button></div>
                </div>
            </div>


        </div>
    )
}

export default EditPerson