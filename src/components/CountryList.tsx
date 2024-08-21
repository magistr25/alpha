import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCountriesQuery } from '../app/apiSlice';
import CountryCard from './Card';
import { RootState } from '../app/store';


interface CountryListProps {
    showLiked: boolean;
}

export interface Country {
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

const CountryList: React.FC<CountryListProps> = ({ showLiked }) => {
    const { data: countries, error, isLoading } = useGetCountriesQuery(undefined);
    const likedCountries = useSelector((state: RootState) => state.cards.likedCountries);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.toString()}</div>;

    const displayedCountries = showLiked
        ? countries?.filter((country: Country) => likedCountries.includes(country.name.common))
        : countries;

    return (
        <div className="country-list">
            {displayedCountries?.map((country: Country) => (
                <CountryCard key={country.name.common} country={country} />
            ))}
        </div>
    );
};

export default CountryList;



