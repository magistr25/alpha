import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeCard, toggleLike } from '../app/cardsSlice';
import  { Country } from '../../types/Country.ts';

interface CountryCardProps {
    country: Country;
    isLiked: boolean;
}
const CountryCard: React.FC<CountryCardProps> = ({ country, isLiked }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLike = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(toggleLike(country.name.common));
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(removeCard(country.name.common));
    };

    const handleCardClick = () => {
        navigate(`/country/${country.name.common}`);
    };

    return (
        <div className="country-card" onClick={handleCardClick}>
            <div className="country-card-actions">
                <button className="like-button" onClick={handleLike}>
                    {isLiked ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="red"
                            stroke="red"
                            width="23px"
                            height="23px"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="red"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            width="23px"
                            height="23px"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    )}
                </button>
                <button className="remove-button" onClick={handleRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                         viewBox="0 0 48 48">
                        <path fill="#f44336"
                              d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                        <path fill="#fff"
                              d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path>
                        <path fill="#fff"
                              d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
                    </svg>
                </button>
            </div>
            <div className="country-card__content">
                <img src={country.flags.png} alt={`${country.name.common} flag`}/>
                <h3>{country.name.common}</h3>
                <p className="truncate">Official Name: {country.name.official}</p>
                <p>Capital: {country.capital?.join(', ')}</p>
                <p>Region: {country.region}</p>
                <p>Population: {country.population.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default CountryCard;

