import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Search Location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-white bg-opacity-20 rounded-full py-2 pl-4 pr-10 text-white placeholder-white"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
