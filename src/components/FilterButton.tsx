import React, {useState} from 'react';

interface FilterButtonProps {
    onToggle: (newShowLiked: boolean) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onToggle }) => {
    const [showLiked, setShowLiked] = useState(false);

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
