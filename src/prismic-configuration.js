import Prismic from "prismic-javascript";

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = "https://velis-site-root.cdn.prismic.io/api/v2";

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
const accessToken =
  "MC5YZU10UUJFQUFDUUFpem5n.77-9K--_vWUz77-977-9au-_ve-_ve-_vX_vv73vv73vv73vv71KJ--_vVFz77-9RQ5m77-977-9cO-_vWPvv73vv70";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = doc => {
  if (doc.type === "page") return `/page/${doc.uid}`;
  return "/";
};

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, { accessToken });
