import React from 'react';

interface CountryCardProps {
    country: {
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
    };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    return (
        <div className="country-card">
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <h3>{country.name.common}</h3>
            <p>Official Name: {country.name.official}</p>
            <p>Capital: {country.capital?.join(', ')}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
        </div>
    );
};

export default CountryCard;


