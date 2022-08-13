import "./index.css";
import { ListPhoto } from "../../utils/ListPhoto";
import ImageGallery from "react-image-gallery";

function Gallery({ value }) {
  return (
    <div
      style={value === "My projects" ? { display: "block" } : null}
      className="Gallery"
      id="Gallery"
    >
      <h2 className="title">My projects</h2>
      <div className="Gallery__content">
        <ImageGallery
          items={ListPhoto}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideInterval={5000}
        />
      </div>
    </div>
  );
}

export default Gallery;
