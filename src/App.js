import "./App.css";
import React, { useState } from "react";
import { SearchBox } from "./component/SearchBox";
import { Poster } from "./component/Poster";
import Logo from "./tmdb.svg";

function App() {
    const [movieData, setMovieData] = useState(null);

    // Function to fetch movie data by ID
    const fetchMovieData = async (movieId) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=44caa3ba5e38f2ce77990ec5811faa2c`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch movie data");
            }
            const data = await response.json();
            setMovieData(data);
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };

    // Function to receive selected movie data
    const handleMovieSelect = (movie) => {
        fetchMovieData(movie.id);
    };

    // Fallback to data object if selectedMovie is null
    const data = movieData || {
        adult: false,
        backdrop_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        belongs_to_collection: null,
        budget: 165000000,
        genres: [
            {
                id: 12,
                name: "Adventure",
            },
            {
                id: 18,
                name: "Drama",
            },
            {
                id: 878,
                name: "Science Fiction",
            },
        ],
        homepage: "http://www.interstellarmovie.net/",
        id: 157336,
        imdb_id: "tt0816692",
        origin_country: ["US"],
        original_language: "en",
        original_title: "Interstellar",
        overview:
            "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        popularity: 416.14,
        poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        production_companies: [
            {
                id: 923,
                logo_path: "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
                name: "Legendary Pictures",
                origin_country: "US",
            },
            {
                id: 9996,
                logo_path: "/3tvBqYsBhxWeHlu62SIJ1el93O7.png",
                name: "Syncopy",
                origin_country: "GB",
            },
            {
                id: 13769,
                logo_path: null,
                name: "Lynda Obst Productions",
                origin_country: "",
            },
        ],
        production_countries: [
            {
                iso_3166_1: "GB",
                name: "United Kingdom",
            },
            {
                iso_3166_1: "US",
                name: "United States of America",
            },
        ],
        release_date: "2014-11-05",
        revenue: 701729206,
        runtime: 169,
        spoken_languages: [
            {
                english_name: "English",
                iso_639_1: "en",
                name: "English",
            },
        ],
        status: "Released",
        tagline: "Mankind was born on Earth. It was never meant to die here.",
        title: "Interstellar",
        video: false,
        vote_average: 8.434,
        vote_count: 34329,
    };

    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
            }}
        >
            <div className="Container">
                <div className="Header">
                    <img src={Logo} alt="logo" />
                    <SearchBox onMovieSelect={handleMovieSelect} />
                </div>
                <Poster
                    genres={data.genres.map((genre) => genre.name).join(",")}
                    productions={data.production_companies
                        .map((company) => company.name)
                        .join(", ")}
                    tagline={data.tagline}
                    img={data.poster_path}
                    title={data.title}
                    overview={data.overview}
                    relDate={data.release_date}
                    voteAvg={data.vote_average}
                    runtime={data.runtime}
                    revenue={data.revenue}
                />
            </div>
        </div>
    );
}

export default App;
