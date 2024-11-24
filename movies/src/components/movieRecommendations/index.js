import React, { useEffect, useState } from 'react';
import { getMovieRecommendations } from "../../api/tmdb-api";

const MovieRecommendations = ({ movieId }) => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (!movieId) return; 

        getMovieRecommendations(movieId)
            .then(data => {
                setRecommendations(data.results);
            })
            .catch(() => {
                setRecommendations([]); 
            });
    }, [movieId]);


    return (
        <div>
            <h3>Recommendations</h3>
            <ul>
                {recommendations.map(movie => (
                    <li key={movie.id}>{movie.title}</li> 
                ))}
            </ul>
        </div>
    );
};

export default MovieRecommendations;
