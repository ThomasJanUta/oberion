/**
 * @see https://www.styled-components.com/docs/advanced#media-templates
 */
import { css } from "styled-components";

const breakpoints = {
  xs: 0,    // > smartphone
  sm: 480,  // >= tablet
  md: 768,  // >= laptop
  lg: 1024, // >= desktop
  xl: 1920, // >= 2K and up
};

/**
 * If [device width] is greater than or equal to xs, then do {…}
 * ${minMedia.xs``};
 */
export const greaterOrEqualThan = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
/**
 * If [device width] is smaller than or equal to xs, then do {…}
 * ${maxMedia.xs``};
 */
export const lessOrEqualThan = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
