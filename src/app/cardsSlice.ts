import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Country {
    name: {
        common: string;
        official: string;
    };
    population: number;
    region: string;
    capital: string[];
    flags: {
        png: string;
        svg: string;
    };
}

interface CardState {
    countries: Country[]; // Список всех стран
    likedCountries: string[]; // Список залайканных стран
}

const initialState: CardState = {
    countries: [],
    likedCountries: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCountries: (state, action: PayloadAction<Country[]>) => {
            state.countries = action.payload;
        },
        toggleLike: (state, action: PayloadAction<string>) => {
            const countryName = action.payload;
            if (state.likedCountries.includes(countryName)) {
                state.likedCountries = state.likedCountries.filter(name => name !== countryName);
            } else {
                state.likedCountries.push(countryName);
            }
        },
        removeCard: (state, action: PayloadAction<string>) => {
            state.countries = state.countries.filter(
                country => country.name.common !== action.payload
            );
            state.likedCountries = state.likedCountries.filter(
                name => name !== action.payload
            );
        },
    },
});

export const { setCountries, toggleLike, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;




