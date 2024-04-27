import GalleryItem from '../GalleryItem/GalleryItem';

export default function GalleryList({ galleryPhotos }) {
  return (
    <div data-testid="galleryList">
      {galleryPhotos.map((photo) => {
        return <GalleryItem photo={photo} />;
      })}
    </div>
  );
}
