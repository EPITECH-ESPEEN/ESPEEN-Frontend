import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
    reducerPath: "serviceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: (city) => `/weather/${city}`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = serviceApi;