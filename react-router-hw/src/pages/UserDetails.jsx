import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function UserDetails() {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [showPhotos, setShowPhotos] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [photos, setPhotos] = useState([]);

    const albums = [
      { id: 1, title: 'Альбом 1' },
      { id: 2, title: 'Альбом 2' },
      { id: 3, title: 'Альбом 3' },
    ];
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          const user = response.data;
          setUserData(user);
        })
        .catch(error => {
          console.error('Помилка при отриманні інформації про користувача:', error);
        });
        if (selectedAlbum) {
          axios
            .get('https://jsonplaceholder.typicode.com/photos', {
              params: {
                albumId: selectedAlbum,
              },
            })
            .then((response) => {
              setPhotos(response.data);
            })
            .catch((error) => {
              console.error('Помилка при отриманні фотографій:', error);
        })} 
    }, [userId, selectedAlbum]);
    
    const handleShowPhotos = (albumId) => {
      setShowPhotos(true);
      setSelectedAlbum(albumId);
    };
  
    return (
      <div>
        <h1>Детальна інформація про користувача</h1>
        {userData && (
          <div>
            <p>Ім'я користувача: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>City: {userData.address.city}</p>
            <p>Street: {userData.address.street}</p>
            <p>ZIP code: {userData.address.zipcode}</p>
            <p>Company: {userData.company.name}</p>
            <p>Website: {userData.website}</p>
            <div>
      <h2>Список альбомів</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <button onClick={() => handleShowPhotos(album.id)}>
              Показати фотографії
            </button>
            {showPhotos && selectedAlbum === album.id && (
              <div>
                <h3>Фотографії альбому {album.id}</h3>
                <ul>
                  {photos.map((photo) => (
                    <li key={photo.id}>
                      {photo.title}
                      <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
          </div>
          
        )}
      </div>
    );
  }


export {UserDetails};
