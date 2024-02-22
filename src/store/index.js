import { configureStore } from '@reduxjs/toolkit';

import { articleApiSlice } from '../components/api/articleApiSlice';
import { newsApiSlice } from '../components/api/newsApiSlice';
import search from '../components/articleSearchForm/articleSearchSlice';

const store = configureStore({
    reducer: { search, [articleApiSlice.reducerPath]: articleApiSlice.reducer, [newsApiSlice.reducerPath]: newsApiSlice.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(articleApiSlice.middleware, newsApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;