import React from 'react'
import { useSelector } from 'react-redux'

const DisplayData = () => {
    let data = useSelector((state) => state.parent);
    console.log(data)

    return (
        <div>
            dispay
        </div>
    )
}

export default DisplayData