import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountryState {
    likedCountries: string[]; // Список залайканных стран
}

const initialState: CountryState = {
    likedCountries: [],
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        toggleLikeCountry: (state, action: PayloadAction<string>) => {
            const countryName = action.payload;
            if (state.likedCountries.includes(countryName)) {
                state.likedCountries = state.likedCountries.filter(name => name !== countryName);
            } else {
                state.likedCountries.push(countryName);
            }
        },
    },
});

export const { toggleLikeCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
