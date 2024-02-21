import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApiSlice = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    tagTypes: ["Articles"],
    endpoints: builder => ({
        getArticles: builder.query({
            query: () => '/articles',
            providesTags: ["Articles"]
        }),
        createArticle: builder.mutation({
            query: article => ({
                url: '/articles',
                method: 'POST',
                body: article,
            }),
            invalidatesTags: ["Articles"]
        }),
        deleteArticle: builder.mutation({
            query: id => ({
                url: `/articles/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Articles"]
        })
    })
})

export const { useGetArticlesQuery, useCreateArticleMutation, useDeleteArticleMutation } = articleApiSlice;