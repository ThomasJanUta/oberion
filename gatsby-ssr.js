/** @see https://www.gatsbyjs.org/docs/ssr-apis/ */
import React from "react";
import RootLayout from "./src/components/RootLayout";

/**
 * Apply page wide settings to the Gatsby root element such as styles and tags for <head>.
 */
export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;
