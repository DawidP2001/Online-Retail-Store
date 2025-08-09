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
    <div id='search-bar'>
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleSearch}
      className="search-bar border p-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#009F75] transition duration-300"
    />
    <input
      type="submit"
      value="Search"
      className="ml-2 bg-[#009F75] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#007f5c] transition duration-300"
    />
    </div>
  );
};
export default SearchBar;