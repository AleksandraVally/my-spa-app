import React from 'react';

interface FilterProps {
    onChange: (filter: 'all' | 'favorites') => void;
}

const Filter: React.FC<FilterProps> = ({ onChange }) => {
    return (
        <div className="filter-buttons">
            <button className="filter-button" onClick={() => onChange('all')}>All</button>
            <button className="filter-button" onClick={() => onChange('favorites')}>Favorites</button>
        </div>
    );
};

export default Filter;