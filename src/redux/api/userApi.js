import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setUser } from "../features/userSlice";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (params) => ({
                url: "/users",
            }),
        }),
        getProfile: builder.query({
            query: () => `/profile`,
            transformResponse: (result) => result.user,
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
            providesTags: ["User"],
        }),
    }),
});

export const { useGetUsersQuery, useGetProfileQuery } = userApi;