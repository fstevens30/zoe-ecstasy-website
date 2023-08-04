import React, { useState, useEffect } from 'react';
import './songs.css';

function getSongsElements(songs) {
    return songs.map((song) => (
      <li key={song.link}>
        <a href={song.link}>
          <img src={song.cover} alt={song.name} />
          <p>{song.name}</p>
          <p>{song.artist}</p>
        </a>
      </li>
    ));
  }

function Songs() {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        fetch('./songs.json')
          .then((response) => response.json())
          .then((data) => {
            console.log('Fetched data:', data); // Add this line to log the data
            setSongs(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching songs:', error);
            setLoading(false);
          });
      }, []);
  
    // Check if data is still loading
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // Check if the songs array is empty or not
    if (songs.length === 0) {
      return <div>No songs found.</div>;
    }
  
    return (
      <div className="songs">
        <ul>
          {getSongsElements(songs)}
        </ul>
      </div>
    );
  }
  
  export default Songs;