
import React from 'react';
import './Search.css';

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Поиск товаров..."
                className="search-input"
            />
            <div className="search-icon">🔍</div>
        </div>
    );
};

export default Search;