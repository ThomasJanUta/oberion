import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Screenshots = ({ screenshots }) => {
  if (!screenshots) return null;

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const images = () => {
    return screenshots.map(el => (
      {
        src: el.path_thumbnail,
        srcfull: el.path_full,
        width: 600,
        height: 338,
      }
    ));
  };
  const photos = images();

  return (
    <section className="screenshot__container">
      <h2 align="center">Screenshots</h2>

      <Gallery photos={photos} onClick={openLightbox} limitNodeSearch={2} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                src: x.srcfull,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </section>
  );
};
Screenshots.propTypes = {
  screenshots: PropTypes.array,
};
export default Screenshots;