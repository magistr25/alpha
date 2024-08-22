import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice.ts';
import cardsReducer from '../app/cardsSlice';
import countriesReducer from '../app/countriesSlice.ts';


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cards: cardsReducer,
        countries: countriesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;




