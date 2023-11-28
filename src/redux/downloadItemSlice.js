import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const downloadFileByLink = createAsyncThunk('dropbox/downloadFile', async (link, { rejectWithValue }) => {
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error(`Failed to download file. Status: ${response.status}`);
        }
        const data = await response.blob();
        return data;
    } catch (error) {
        return rejectWithValue({
            status: 'error',
            result: null,
            message: error.message,
        });
    }
});

const downloadItemSlice = createSlice({
    name: 'dropbox',
    initialState: {
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(downloadFileByLink.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(downloadFileByLink.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(downloadFileByLink.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default downloadItemSlice.reducer;
