import React from 'react';

type SearchBarProps = {
    placeholder?: string;
    onSearch: (query: string) => void;
    };
const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleSearch}
      className="search-bar"
    />
  );
};
export default SearchBar;