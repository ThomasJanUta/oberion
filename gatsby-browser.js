/** @see https://www.gatsbyjs.org/docs/browser-apis/ */
import React from "react";
import RootLayout from "./src/components/RootLayout";

/**
 * Apply global settings to the Gatsby root element such as styles and meta tags for <head>.
 * @see https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
 */
export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;

/**
 * Trigger reload for service worker when an update is available.
 * @see https://www.gatsbyjs.org/docs/browser-apis/#onServiceWorkerUpdateReady
 */
export const onServiceWorkerUpdateReady = () => window.location.reload();
