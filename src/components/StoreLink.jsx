import React from "react";
import * as PropTypes from "prop-types";

const StoreLink = ({ appid, gameName }) => {
  if (appid === undefined) return null;

  const srcUrl = `https://store.steampowered.com/widget/${appid}`;
  const title = `Buy ${gameName} on Steam`;

  return (
    <div className="store-link__container">
      <iframe src={srcUrl}
              title={title}
              frameBorder="0"
              className="store-link__iframe"
      />
    {/* TODO Create component for small devices to replace Steam's iframe */}
    </div>
  );
};
StoreLink.propTypes = {
  appid: PropTypes.string,
  gameName: PropTypes.string,
};
export default StoreLink;