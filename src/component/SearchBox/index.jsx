import React, { useState, useEffect } from "react";
import "./style.css";

export const SearchBox = ({ onMovieSelect }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getMovie = async (keyword) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=44caa3ba5e38f2ce77990ec5811faa2c&query=${keyword}`);
            const json = await response.json();
            if (json.results) {
                setFilteredSuggestions(json.results);
            }
        } catch (error) {
            console.error("Error fetching movie suggestions:", error);
            setFilteredSuggestions([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            getMovie(searchTerm);
        } else {
            setFilteredSuggestions([]);
        }
    }, [searchTerm]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(""); // Clear the input field after selecting a suggestion
        onMovieSelect(suggestion);
        // Pass selected movie to parent component
    };

    return (
        <div className="search-container">
            <input
                type="search"
                placeholder="Search Movie Title..."
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
            />
            {isLoading && <div className="loading"></div>}
            {filteredSuggestions.length > 0 && (
                <ul className="suggestions-list">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="suggestion-item"
                        >
                            {suggestion.title} {/* Assuming API returns movie title */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
