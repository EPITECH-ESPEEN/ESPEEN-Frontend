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


/* ----- FUNCTIONS ----- */
export const googleServiceApi = createApi({
    reducerPath: "googleServiceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        getGoogleAuth: builder.query({
            query: () => "/auth",
        }),
    }),
});

export const { useGetGoogleAuthQuery } = googleServiceApi;
