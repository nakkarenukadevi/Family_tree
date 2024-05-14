import { configureStore } from "@reduxjs/toolkit";
import familyReducer from "./familySlice"
const Store = configureStore({
    reducer: {
        parent: familyReducer

    }


});
export default Store