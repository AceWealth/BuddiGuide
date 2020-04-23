import React from "react";

export const SearchBar = ({ placeholder, handleChange }) => (
	<input
		className="search"
		type="search"
		placeholder={ placeholder }
		onChange={handleChange}
	/>
	
);
