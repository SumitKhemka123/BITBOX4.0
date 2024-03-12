import React, { useState } from 'react';
import './Yt.css';

const apiKey = 'AIzaSyCc_sJxkrdB7l3-cd2RiWYOLx-UncJcwlk'; 

function YouTubeSearch() {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [showImage, setShowImage] = useState(true);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch videos');
            }
            const data = await response.json();
            setVideos(data.items);
            setShowImage(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1 className="yt-head flex">Video Resources</h1>
            <div className="wrapper flex">
                <form onSubmit={handleSearch} id="searchForm">
                    <input type="text" autoComplete="off" value={query} onChange={(e) => setQuery(e.target.value)} id="searchQuery" className="input" placeholder="Enter Your Query" />
                    <button type="submit" className="sbt">Search</button>
                </form>
                {showImage && (
                    <img src="./videoresource.jpeg" alt="Student Studying from YouTube" className="search-image" />
                )}
            </div>
            <div id="results">
                {videos.map((video) => (
                    <div className="video-container" key={video.id.videoId}>
                        <iframe width="400" height="800" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0" allowFullScreen title={video.snippet.title}></iframe>
                        <div className="video-description"><h2>{video.snippet.title}</h2></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YouTubeSearch;
