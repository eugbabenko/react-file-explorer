import { createSlice } from '@reduxjs/toolkit';

// Initial state for the pathSlice
const initialState = {
    path: localStorage.getItem('path') || '',
};

// Create the pathSlice slice
export const pathSlice = createSlice({
    name: 'path',
    initialState,
    reducers: {
        // Reducer function to set the path in the state
        setPath: (state, action) => {
            state.path = action.payload;
        },
    },
});

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;
