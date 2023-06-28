import React, { useState } from 'react';
import './PageUtils.scss';

type SearchBarProps = {
    onSearch: (searchTerm: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search by game name" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};
