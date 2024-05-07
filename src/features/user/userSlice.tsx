import { createSlice } from "@reduxjs/toolkit";

interface register {
    user?: {
        name: string
        email: string,
    },
}

const initialState: register = {}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser: (state, action: { type: string, payload: register }) => {
            state.user = action.payload.user;
        },
        resetUser: (state) => {
            state.user = undefined;
        }
    }
})

export const { registerUser, resetUser } = UserSlice.actions;

export const UserReducer = UserSlice.reducer;