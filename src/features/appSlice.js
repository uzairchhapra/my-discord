import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        channelId: null,
        channelName: null,
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setChannelId: (state, action) => {
            state.value += action.payload;
        },
        logout: (state) => {
            state.app = null;
        }
    },
});

export const { login, logout } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId
export const selectChannelName = (state) => state.app.channelName

export default appSlice.reducer;
