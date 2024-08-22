import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Country } from '../../types/Country';

const CountryDetail: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const navigate = useNavigate();
    const country = useSelector((state: RootState) =>
        state.cards.countries.find((c: Country) => c.name.common === name)
    );

    if (!country) {
        return <div>Country not found</div>;
    }

    return (
        <div className="country-detail-wrapper">
            <div className="country-detail">
                <h2>{country.name.common}</h2>
                <img src={country.flags.png} alt={`${country.name.common} flag`}/>
                <p>Official Name: {country.name.official}</p>
                <p>Capital: {country.capital?.join(', ')}</p>
                <p>Region: {country.region}</p>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Full Description: {country.name.official}</p>
            </div>
            <button className="button-detail" onClick={() => navigate(-1)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="16px"
                    height="16px"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                <span>НАЗАД</span>
            </button>

        </div>

    )
        ;
};

export default CountryDetail;

