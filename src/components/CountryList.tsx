import { useGetCountriesQuery } from '../app/apiSlice.ts';

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

const CountryList = () => {
    const { data: countries, error, isLoading } = useGetCountriesQuery(undefined);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.toString()}</div>;

    return (
        <div>
            {countries?.map((country: Country) => (
                <div key={country.name.common}>
                    <h3>{country.name.common}</h3>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital?.join(', ')}</p>
                    <p>Population: {country.population.toLocaleString()}</p>
                    <img src={country.flags.png} alt={`${country.name.common} flag`} />
                </div>
            ))}
        </div>
    );
};

export default CountryList;
