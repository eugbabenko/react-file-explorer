import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    path: '',
};

export const pathSlice = createSlice({
    name: 'path',
    initialState,
    reducers: {
        setPath: (state, action) => {
            state.path = action.payload;
        },
    },
});

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;
