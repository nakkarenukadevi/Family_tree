import React, { useEffect, useState } from 'react'
import mockdata from "../mockdata.json";
import { useDispatch, useSelector } from 'react-redux'
import { InitialfamilyData, deletePerson, searchPerson } from '../Store/familySlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    let data = useSelector((state) => state.parent);

    let [search, setSearch] = useState("");
    let [editPop, setEditPop] = useState(false);
    let dispatch = useDispatch();

    useEffect(() => {
        if (data.familydata.length <= 4) {
            dispatch(InitialfamilyData(mockdata.family_tree));
        }

    }, [])
    let navigate = useNavigate()
    const handleDeletePerson = (id) => {
        let filter_person = data.familydata.filter((person) => {
            if (person.parent_id === id) {
                return false;
            }
            else {
                return true;
            }
        });
        dispatch(deletePerson(filter_person))
    }
    const handleSearch = () => {


        let searchedPerson = data.familydata.filter((searchperson) => {
            if (searchperson.name === search.trim()) {
                return true;
            } return false;
        })
        if (searchedPerson === "") {
            dispatch(InitialfamilyData(mockdata.family_tree));
        } else {
            dispatch(searchPerson(searchedPerson));
        }

    }



    const handleEditPerson = () => {
        setEditPop((prevEditPopState) => !prevEditPopState);
        let eperson = data.familydata.map((per) => {
            if (per.id === editPerson.id) {
                return { ...per, ...editPerson }
            } return per
        });
        dispatch(InitialfamilyData(eperson))
    };

    const handlesortname = (e) => {


        if (["id", "father", "name", "relation"].includes(e.target.id)) {

            let dataCopy = [...data.familydata];



            let finalData = dataCopy.sort((a, b) => {

                if (e.target.id === "id") {
                    return a.parent_id - b.parent_id;
                }
                return a[e.target.id].localeCompare(b[e.target.id]);

            });
            dispatch(InitialfamilyData(finalData));


        }
    }
    return (
        <>
            <div className='flex justify-between m-5 '>
                <Link to="/addperson">
                    <button className='border-2 border-black py-4 px-6 rounded-lg   font-sans font-bold font-2xl bg-green-800 text-white' >Add</button>
                </Link>

                <div className='flex justify-between items-center' >

                    <div> <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} className='border-2 border-black py-3 px-5 rounded-lg' /></div>
                    <div className='ml-3'><button className='border-2 border-black py-3 px-6 rounded-lg   font-sans font-bold font-2xl bg-blue-700 text-white' onClick={() => { handleSearch() }}>search</button></div>
                </div>
            </div>
            <table className=' border-separate border-spacing-2 border border-slate-400 m-auto  w-full '>
                <thead >
                    <tr className='bg-gray-300 font-bold text-xl' key="headers" onClick={handlesortname}>
                        <td className='border border-slate-300  p-3' key="id">
                            Id
                            <FontAwesomeIcon id="id" icon={faSortDown} />
                        </td>
                        <td className='border border-slate-300  p-3' key="name">
                            Name

                            <FontAwesomeIcon id="name" icon={faSortDown} />
                        </td>
                        <td className='border border-slate-300  p-3' key="father">
                            Father
                            <FontAwesomeIcon id="father" icon={faSortDown} />
                        </td>
                        <td className='border border-slate-300  p-3 text-center' key="delete-action">delete
                        </td>
                        <td className='border border-slate-300  p-3 text-center' key="edit-action">Edit
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.familydata.map((p) => {
                            return (
                                <tr key={p.id} className='font-bold'>
                                    <td className='border border-slate-300  p-3'>{p.parent_id}</td>
                                    <td className='border border-slate-300  p-3'>{p.name}</td>
                                    <td className='border border-slate-300  p-3'>{p.father}</td>
                                    <td className='border border-slate-300  p-3 text-center'><FontAwesomeIcon icon={faTrash} className='text-red-800' onClick={() => { handleDeletePerson(p.parent_id) }} /></td>

                                    <td className='border border-slate-300  p-3 text-center'><FontAwesomeIcon icon={faEdit} className='text-green-800' onClick={() => { setEditPerson(p); setEditPop((prevEditPopState) => !prevEditPopState); }} /></td>

                                </tr>);
                        })
                    }
                </tbody>




            </table>
            {
                editPop === true ? <div className='absolute top-40 left-1/2  w-1/2 p-20  rounded-lg  font-bold '>
                    <div className='flex justify-center m-auto border-2 border-black  mt-10 p-10 rounded-lg bg-orange-400'>
                        <div>

                            <div >
                                <div className='flex justify-between items-center m-3  font-sans font-bold'>
                                    <div>      <label>Id</label> </div>
                                    <div>    <input type="text" className='border-2 border-black p-3' value={editPerson.parent_id} onChange={(e) => { setEditPerson({ ...editPerson, parent_id: e.target.value }) }} /></div>

                                </div>
                                <div className='flex justify-between items-center m-3  font-sans font-bold'>
                                    <div> <label>Name</label></div>
                                    <div><input type="text" className='border-2 border-black p-3' value={editPerson.name} onChange={(e) => { setEditPerson({ ...editPerson, name: e.target.value }) }} /></div>

                                </div>
                                <div className='flex justify-between items-center m-3  font-sans font-bold'>
                                    <div>    <label>Father Name</label></div>
                                    <div> <input type="text" className='border-2 border-black p-3' value={editPerson.father} onChange={(e) => { setEditPerson({ ...editPerson, father: e.target.value }) }} /></div>

                                </div>
                                <div className='flex justify-between items-center m-3  font-sans font-bold'>
                                    <div><label>Relation</label> </div>
                                    <div> <input type="text" className='border-2 border-black p-3' value={editPerson.relation} onChange={(e) => { setEditPerson({ ...editPerson, relation: e.target.value }) }} /></div>

                                </div>
                                <div className=' text-center'><button className='py-3 bg-blue-800 text-white font-bold  px-4' onClick={() => { handleEditPerson() }}>Add person</button></div>
                            </div>
                        </div>


                    </div>
                </div> : null
            }
        </>
    )
}

export default Home