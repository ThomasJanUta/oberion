import React from "react";
import PropTypes from "prop-types";
import { A_REL } from "./navidation/link";
import steamIcon from "../../res/steam-icon.png";
import styled from "styled-components";


const StoreLink = ({ appid, gameName }) => {
  if (appid === undefined) return null;

  const widgetUrl = `https://store.steampowered.com/widget/${appid}`;
  const widgetLabel = `Buy ${gameName} on Steam`;

  const buttonUrl = `https://store.steampowered.com/app/${appid}`;
  const buttonLabel = `Buy on Steam`;

  return (
    <section className="store-link__section">
      <div className="store-link__container">
        <iframe src={widgetUrl}
                title={widgetLabel}
                frameBorder="0"
                className="store-link__iframe"
        />
      </div>
      <div className="wishlist-button">
        <a href={buttonUrl} rel={A_REL.ENDORSE}>
          <WishlistButton>
            <SteamImg src={steamIcon} alt={buttonLabel} />
            <TextSpan>{buttonLabel}</TextSpan>
          </WishlistButton>
        </a>
      </div>
    </section>
  );
};
StoreLink.propTypes = {
  appid: PropTypes.number,
  gameName: PropTypes.string,
};
export default StoreLink;


const WishlistButton = styled.div`
  color: #fff;
  width: 21rem;
  text-align: left;
  background: linear-gradient(225deg,#1274a7 47%,#081a42 0);
  margin: auto;
  border-radius: 43px;
  box-shadow: 1px 5px 12px 0 rgba(0,0,0,.75);
  
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  transition-duration: .3s;
  transition-property: box-shadow,transform;
`;
const SteamImg = styled.img`
  width: 89px;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
`;
const TextSpan = styled.span`
  font-size: 2rem;
  top: 5px;
  padding-left: 9px;
  text-shadow: 1px 1px 2px #081a42;
  position: relative;
`;