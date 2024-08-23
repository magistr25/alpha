import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

interface FilterButtonProps {
    onToggle: (newShowLiked: boolean) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onToggle }) => {
    const location = useLocation();
    const [showLiked, setShowLiked] = useState(false);

    useEffect(() => {
        // Обновляем состояние в зависимости от текущего маршрута
        if (location.pathname === "/liked") {
            setShowLiked(true); // На маршруте /liked кнопка должна показывать "Show All"
        } else {
            setShowLiked(false); // На маршруте / кнопка должна показывать "Show Liked"
        }
    }, [location.pathname]);

    const handleClick = () => {
        const newShowLiked = !showLiked;
        setShowLiked(newShowLiked);
        onToggle(newShowLiked);
    };

    return (
        <button className="button" onClick={handleClick}>
            {showLiked ? 'Show All' : 'Show Liked'}
        </button>
    );
};

export default FilterButton;

