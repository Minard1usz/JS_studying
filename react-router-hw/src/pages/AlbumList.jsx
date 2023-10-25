import React, { useState } from 'react';

function AlbumList() {
  const [showPhotos, setShowPhotos] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const albums = [
    { id: 1, title: 'Альбом 1' },
    { id: 2, title: 'Альбом 2' },
    { id: 3, title: 'Альбом 3' },
  ];

  const handleShowPhotos = (albumId) => {
    setShowPhotos(true);
    setSelectedAlbum(albumId);
  };

  return (
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
              <PhotoList albumId={selectedAlbum} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );

function PhotoList({ albumId }) {
  return (
    <div>
      <h3>Фотографії альбому {albumId}</h3>
      <ul>
        <li>Фото 1</li>
        <li>Фото 2</li>
        <li>Фото 3</li>
      </ul>
    </div>
  );
}}

export { AlbumList };
