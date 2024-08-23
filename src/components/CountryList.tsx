import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CountryCard from './Card';
import {RootState} from '../app/store';
import {setCountries} from '../app/cardsSlice';
import {Country} from '../../types/Country.ts';
import {useGetCountriesQuery} from "../app/apiSlice.ts";

interface CountryListProps {
    showLiked: boolean;
}

const CountryList: React.FC<CountryListProps> = ({showLiked}) => {
    const dispatch = useDispatch();
    const {data: countries, error, isLoading} = useGetCountriesQuery(undefined);
    const likedCountries = useSelector((state: RootState) => state.cards.likedCountries);
    const storedCountries = useSelector((state: RootState) => state.cards.countries);

    // Загружаем страны в стор, если они еще не были загружены
    useEffect(() => {
        if (countries && storedCountries.length === 0) {
            dispatch(setCountries(countries));
        }
    }, [countries, storedCountries.length, dispatch]);

    if (isLoading) return  <div className="loader"></div>;
   if (error) return <div>Error occurred: {error.toString()}</div>;

    const displayedCountries = showLiked
        ? storedCountries.filter((country: Country) => likedCountries.includes(country.name.common))
        : storedCountries;

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

