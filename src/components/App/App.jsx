import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';

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
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>
      <GalleryList galleryPhotos={galleryPhotos} />
    </div>
  );
}

export default App;
