import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const articlesAdapter = createEntityAdapter();

const initialState = articlesAdapter.getInitialState({
    searchTerm: ''
})

const articleListSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        findArticle: (state, action) => {
            state.searchTerm = action.payload
        }
    }
});

const { actions, reducer } = articleListSlice;

export const { findArticle } = actions;

export default reducer;