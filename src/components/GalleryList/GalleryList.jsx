import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.scss';

export default function GalleryList({ galleryPhotos }) {
  return galleryPhotos.map((photo) => {
    return (
      <div key={photo.id} data-testid="galleryList">
        <div>
          <GalleryItem photo={photo} />
        </div>
      </div>
    );
  });
}
