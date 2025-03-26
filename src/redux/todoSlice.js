import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task:[],
};

export const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers: {
        addTask : (state, action) => {
            state.task.push(action.payload);
        },
        removeTask : (state, action) => {
            state.task = state.task.filter(task => task.id !== action.payload.id)
        },
    },
});

export const {addTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;
