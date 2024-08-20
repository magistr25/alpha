import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
    likedCountries: string[];
}

const initialState: CardState = {
    likedCountries: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<string>) => {
            const countryName = action.payload;
            if (state.likedCountries.includes(countryName)) {
                state.likedCountries = state.likedCountries.filter(name => name !== countryName);
            } else {
                state.likedCountries.push(countryName);
            }
        },
        removeCard: (state, action: PayloadAction<string>) => {
            state.likedCountries = state.likedCountries.filter(name => name !== action.payload);
        },
    },
});

export const { toggleLike, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;


