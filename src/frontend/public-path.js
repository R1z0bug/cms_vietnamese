document.addEventListener('DOMContentLoaded', () => {
  const path = '/static/richie/js/build/';

  // Try to find the `public-path` meta tag. If it exists, the value attribute
  // contains the CDN url to used to fetch chunks generated by
  // the webpack build
  const metaPublicPath = document.querySelector('meta[name="public-path"]');

  __webpack_public_path__ = `${path}`;

  if (metaPublicPath) {
    __webpack_public_path__ = `//${metaPublicPath.getAttribute('value')}${path}`;
  }
});