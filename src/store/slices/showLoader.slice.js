import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
    name: 'loader',
    initialState: true,
    reducers: {
        setShowLoader: (state, action) => {
            return action.payload;
        }
    }
})

export const { setShowLoader } = mySlice.actions;

export default mySlice.reducer;
