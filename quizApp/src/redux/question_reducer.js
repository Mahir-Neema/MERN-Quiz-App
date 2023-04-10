import { createSlice } from "@reduxjs/toolkit"

// reducer with initial value
export const questionReducer = createSlice({
    name: 'questions',
    initialState:{
        queue:[],
        answers:[],
        trace: 0
    },
    reducers:{
        startQuizAction:(state,action)=>{
            return {
                ...state,
                queue: action.payload
            }
        }
    }
})

export const {startQuizAction} = questionReducer.actions;
export default questionReducer.reducer;