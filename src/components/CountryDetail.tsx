import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useEffect } from 'react';
import '../App.css';

const CountryDetail = () => {
    const { name } = useParams<{ name: string }>(); // Получаем название страны из URL
    const navigate = useNavigate();

    // Получаем данные о странах из стора
    const countries = useSelector((state: RootState) => state.cards.countries);
    const country = countries.find(country => country.name.common === name); // Сравнение с `country.name.common`

    useEffect(() => {
        if (!country) {
            // Если данные о стране не найдены, перенаправляем на главную страницу
            navigate('/');
        }
    }, [country, navigate]);

    // Если данные о стране еще загружаются или были перенаправлены, возвращаем null
    if (!country) return null;

    return (
        <div className="country-detail-wrapper">
            <div className="country-detail">
                <h2>{country.name.common}</h2>
                <img src={country.flags.png} alt={`${country.name.common} flag`} />
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
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>НАЗАД</span>
            </button>
        </div>
    );
};

export default CountryDetail;
