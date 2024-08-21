import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useState } from 'react';

const FilterButton = () => {
    // Локальное состояние для отображения только залайканных стран
    const [showLiked, setShowLiked] = useState(false);

    // Получаем список залайканных стран из Redux Store
    const likedCountries = useSelector((state: RootState) => state.countries.likedCountries);

    // Обработчик переключения фильтра
    const handleToggle = () => {
        setShowLiked(!showLiked);
    };

    return (
        <div>
            <button onClick={handleToggle}>
                {showLiked ? 'Show All' : 'Show Liked'}
            </button>
            {showLiked && (
                <div>
                    {likedCountries.length === 0 ? (
                        <p>No liked countries</p>
                    ) : (
                        likedCountries.map((countryName) => (
                            <p key={countryName}>Liked Country: {countryName}</p>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default FilterButton;

