import { createSlice } from '@reduxjs/toolkit';

// Initial state for the updateFilesSlice
const initialState = {
    update: false,
};

// Create the updateFilesSlice slice
export const updateFilesSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {
        // Reducer function to toggle the update state
        updateFiles: (state) => {
            state.update = !state.update;
        },
    },
});
// Export the action creator for updating files
export const { updateFiles } = updateFilesSlice.actions;
export default updateFilesSlice.reducer;
