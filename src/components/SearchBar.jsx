import React from "react";

/**
 * SearchBar component allows searching employees by name or department.
 * @param {string} searchTerm - Current search input
 * @param {Function} onSearch - Function to update searchTerm
 */
const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or department"
      value={searchTerm} // Controlled input value
      onChange={(e) => onSearch(e.target.value)} // Update searchTerm as user types
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "16px",
      }}
    />
  );
};

export default SearchBar;
