import { createSlice } from '@reduxjs/toolkit'

const familySlice = createSlice({
    name: "family",
    initialState: {
        familydata: []

    },
    reducers: {
        InitialfamilyData: (state, action) => {
            state.familydata = action.payload

        }

    }


})
export const { InitialfamilyData } = familySlice.actions;
export default familySlice.reducer;
