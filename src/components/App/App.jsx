import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import '../GalleryList/GalleryList.scss';

function App() {
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  useEffect(() => {
    fetchGalleryPhotos();
  }, []);

  const fetchGalleryPhotos = () => {
    axios({
      method: 'GET',
      url: '/api/gallery',
    })
      .then((response) => {
        console.log('Data:', response.data);
        setGalleryPhotos(response.data);
      })
      .catch((error) => {
        console.log('We have an error', error);
      });
  };

  return (
    <div data-testid="app" style={{ display: 'flex', flexDirection: 'column' }}>
      <header style={{ textAlign: 'center' }}>
        <h1>React Gallery</h1>
      </header>
      <div className="gallery-list-container">
        <GalleryList galleryPhotos={galleryPhotos} />
      </div>
    </div>
  );
}

export default App;
