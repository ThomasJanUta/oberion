import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const playerTagStyle = {
  maxWidth: "640px",
  maxHeight: "auto",
};
const videoTagStyle = {
  style: {
    borderRadius: "8px",
    width: "100%",
    height: "auto",
  },
};

const Trailer = ({ movies }) => {
  if (movies.length === 0) return null;
  const trailer = movies[0];

  return (
    <ReactPlayer
      style={playerTagStyle}
      url={trailer.mp4.res480}
      playing
      loop controls volume={0.8} muted
      onContextMenu={e => e.preventDefault()}
      width="100%"
      height="auto"
      config={{
        file: {
          attributes:
            {
              ...videoTagStyle,
              controlsList: "nodownload",
              disablePictureInPicture: true,
            },
        },
      }} />
  );
};
Trailer.propTypes = {
  movies: PropTypes.object,
};
export default Trailer;