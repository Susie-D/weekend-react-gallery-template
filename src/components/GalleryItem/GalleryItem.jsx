export default function GalleryItem({ photo }) {
  return (
    <span data-testid="galleryItem">
      <img src={photo.url} />
      <button>Love it</button>
      <p>I love this</p>
    </span>
  );
}
