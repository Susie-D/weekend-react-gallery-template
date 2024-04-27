import { useState } from 'react';
import './GalleryItem.scss';

export default function GalleryItem({ photo }) {
  const addLike = () => {
    setNumberOfLikes(numberOfLikes + 1);
  };

  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [toggleImage, setToggleImage] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);

  return (
    <span className="gallery-item-container" data-testid="galleryItem">
      <div className="gallery-item-content">
        {!toggleImage && (
          <img
            src={photo.url}
            onClick={() => {
              setToggleImage(!toggleImage);
              setToggleDescription(!toggleDescription);
            }}
          />
        )}

        {toggleDescription && (
          <span
            onClick={() => {
              setToggleImage(!toggleImage);
              setToggleDescription(!toggleDescription);
            }}
          >
            {photo.description}
          </span>
        )}

        <button onClick={() => addLike()}>Love it</button>

        <p>{numberOfLikes} people love this</p>
      </div>
    </span>
  );
}
