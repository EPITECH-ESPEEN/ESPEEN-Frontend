import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { userApi } from "./userApi";

interface LoginRequestBody {
    username: string;
    password: string;
}

interface RegisterRequestBody {
    username: string;
    email: string;
    password: string;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        login: builder.mutation<void, LoginRequestBody>({
            query(body) {
                return {
                    url: "/login",
                    method: "POST",
                    body,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getProfile.initiate());
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        logout: builder.query<void, void>({
            query: () => "/logout",
        }),
        register: builder.mutation<void, RegisterRequestBody>({
            query(body) {
                return {
                    url: "/register",
                    method: "POST",
                    body,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getProfile.initiate());
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useLoginMutation, useLazyLogoutQuery, useRegisterMutation } = authApi;
