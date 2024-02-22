import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const _apiKey = 'apiKey=3bd3a4d944c743009a00f190875b5e89';

export const newsApiSlice = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
    tagTypes: ["News"],
    endpoints: builder => ({
        getNews: builder.query({
            query: (offset = 10) => ({
                url: `everything?q=bitcoin&pageSize=${offset}&${_apiKey}`,
                method: "GET"
            }),
            providesTags: ["News"]
        })
    })
});

export const { useGetNewsQuery, useUploadMoreMutation } = newsApiSlice;