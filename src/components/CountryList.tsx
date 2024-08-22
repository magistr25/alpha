import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetCountriesQuery } from '../app/apiSlice';
import CountryCard from './Card';
import { RootState } from '../app/store';
import { setCountries } from '../app/cardsSlice';
import  { Country } from '../../types/Country.ts';

interface CountryListProps {
    showLiked: boolean;
}

const CountryList: React.FC<CountryListProps> = ({ showLiked }) => {
    const dispatch = useDispatch();
    const { data: countries, error, isLoading } = useGetCountriesQuery(undefined);
    const likedCountries = useSelector((state: RootState) => state.cards.likedCountries);
    const allCountries = useSelector((state: RootState) => state.cards.countries);

    useEffect(() => {
        if (countries) {
            dispatch(setCountries(countries));
        }
    }, [countries, dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.toString()}</div>;

    const displayedCountries = showLiked
        ? allCountries.filter((country: Country) => likedCountries.includes(country.name.common))
        : allCountries;

    return (
        <div className="country-list">
            {displayedCountries.map((country: Country) => (
                <CountryCard
                    key={country.name.common}
                    country={country}
                    isLiked={likedCountries.includes(country.name.common)}
                />
            ))}
        </div>
    );
};

export default CountryList;
