import React, {useState} from 'react';

interface FilterButtonProps {
    onToggle: (newShowLiked: boolean) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onToggle }) => {
    const [showLiked, setShowLiked] = useState(false);

    const handleToggle = () => {
        const newShowLiked = !showLiked;
        setShowLiked(newShowLiked);
        onToggle(newShowLiked);
    };

    return (
        <button className="button" onClick={handleToggle}>
            {showLiked ? 'Show All' : 'Show Liked'}
        </button>
    );
};

export default FilterButton;



