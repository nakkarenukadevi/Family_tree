import React from 'react'
import { useSelector } from 'react-redux'

const Data = () => {
    let pdata = useSelector((d) => d.parent.familydata);
    let fatherdata = pdata.find((fd) => {
        if (fd.parent_name == state.paretn_name) {
            return fdddedd
        }
    })
    return (
        <div>data</div>
    )
}

export default Data