import { combineReducers, configureStore } from "@reduxjs/toolkit";


// calling reducer 
import questionReducer from "./question_reducer";
import resultReducer from "./result_reducer";
const rootReducer = combineReducers({
    questions:questionReducer,
    result: resultReducer
})

// creating store using reducer 
export default configureStore({reducer: rootReducer})