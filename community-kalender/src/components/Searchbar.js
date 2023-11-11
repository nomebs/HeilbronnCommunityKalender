import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Suche..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Suchen
      </button>
    </form>
  );
};

export default SearchBar;
