import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    update: false,
};

export const updateFilesSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {
        updateFiles: (state) => {
            state.update = !state.update;
        },
    },
});

export const { updateFiles } = updateFilesSlice.actions;
export default updateFilesSlice.reducer;
