import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "./api/userApi";
import { authApi } from "./api/authApi";
import userReducer from "./features/userSlice";

export const store = configureStore({
    reducer: {
        auth: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
        userApi.middleware,
        authApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
