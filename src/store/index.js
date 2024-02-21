import { configureStore } from '@reduxjs/toolkit';

import { articleApiSlice } from '../components/api/articleApiSlice';
import search from '../components/articleSearchForm/articleSearchSlice';

const store = configureStore({
    reducer: { search, [articleApiSlice.reducerPath]: articleApiSlice.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(articleApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;