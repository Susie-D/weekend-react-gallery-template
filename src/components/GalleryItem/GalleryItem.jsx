import axios from 'axios';
import { useState } from 'react';
import './GalleryItem.scss';

export default function GalleryItem({ photo }) {
  const addLike = (photoId) => {
    setNumberOfLikes(numberOfLikes + 1);
    axios({
      method: 'PUT',
      url: `/api/gallery/${photoId}`,
    })
      .then((response) => {
        console.log('Data', response.data);
      })
      .catch((error) => {
        console.log('We have an error on LIKES', error);
      });
  };

  const [numberOfLikes, setNumberOfLikes] = useState(photo.likes);
  const [toggleImage, setToggleImage] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);

  return (
    <span className="gallery-item-container">
      <div className="gallery-item-content" data-testid="galleryItem">
        <p>{photo.title}</p>
        {!toggleImage && (
          <img
            data-testid="toggle"
            src={photo.url}
            onClick={() => {
              setToggleImage(!toggleImage);
              setToggleDescription(!toggleDescription);
            }}
          />
        )}

        {toggleDescription && (
          <span
            data-testid="toggle"
            onClick={() => {
              setToggleImage(!toggleImage);
              setToggleDescription(!toggleDescription);
            }}
          >
            {photo.description}
          </span>
        )}

        <button data-testid="like" onClick={() => addLike(photo.id)}>
          Like It
        </button>
        {!photo.likes ? (
          <p>No liked this photo yet. </p>
        ) : (
          <p>{numberOfLikes} people like this!</p>
        )}
      </div>
    </span>
  );
}
