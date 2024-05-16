import { createSlice } from '@reduxjs/toolkit'

const familySlice = createSlice({
    name: "family",
    initialState: {
        familydata: []

    },
    reducers: {
        InitialfamilyData: (state, action) => {
            state.familydata = action.payload

        },
        addNewPerson: (state, action) => {
            state.familydata.push(action.payload)
        },
        deletePerson: (state, action) => {

            state.familydata = action.payload
        },
        searchPerson: (state, action) => {
            state.familydata = action.payload

        }

    }


})
export const { InitialfamilyData, addNewPerson, deletePerson, searchPerson } = familySlice.actions;
export default familySlice.reducer;
