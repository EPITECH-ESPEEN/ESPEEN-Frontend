/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setUser } from "../features/userSlice";


/* ----- TYPES ----- */
interface User {
    id: string;
    username: string;
    name: string;
    email: string;
}

interface ProfileResponse {
    user: User;
}


/* ----- FUNCTIONS ----- */
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => ({
                url: "/users",
            }),
        }),
        getProfile: builder.query<User, void>({
            query: () => `/profile`,
            transformResponse: (result: ProfileResponse) => result.user,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
            try {
                const { data } = await queryFulfilled;
                dispatch(setUser(data));
                dispatch(setIsAuthenticated(true));
                // dispatch(setLoading(false));
            } catch (error) {
                // dispatch(setLoading(false));
                console.log(error);
            }
            },
            providesTags: [{ type: "User" }],
        }),
    }),
});

export const { useGetUsersQuery, useGetProfileQuery } = userApi;
