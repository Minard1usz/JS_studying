import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PhotosList(props) {
    const albumId = props.albumId;
    const [photos, setPhotos] = useState([]);
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/photos,${albumId}`)
        .then(response => {
          setPhotos(response.data);
        })
        .catch(error => {
          console.error('Помилка при отриманні фотографій:', error);
        });
    }, [albumId]);
  
    return (
      <div>
        <h1>Фотографії альбому</h1>
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    );
  }

export {PhotosList};