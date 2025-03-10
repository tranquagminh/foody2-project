"use client"
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  return (
    <div ref={searchRef} className="relative top-[-2px]">
      {/* Search Icon */}
      <button
        onClick={handleSearchClick}
        className={`bg-white w-8 h-8 rounded-full flex items-center justify-center
          hover:bg-[#3cb815] hover:text-white transition-all
          ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      >
        <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
      </button>

      {/* Search Input Container */}
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 
          bg-white rounded-full shadow-lg overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen 
            ? 'w-[300px] opacity-100 visible' 
            : 'w-0 opacity-0 invisible'}`}
      >
        <div className="flex items-center px-4 h-10">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search here..."
            className="flex-1 outline-none text-gray-700 text-sm"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results - Optional */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-1 max-h-[300px] overflow-auto">
            <div className="p-2">
              {/* Example Results */}
              <div className="text-sm text-gray-500 p-2">
                Start typing to search...
              </div>
              {/* You can map through actual results here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;