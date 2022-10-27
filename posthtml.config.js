const { getPosthtmlW3c } = require('pineglade-w3c');

module.exports = {
  plugins: [
    getPosthtmlW3c({
      exit: process.env.NODE_ENV === 'development',
      forceOffline: true,
      getSourceName(filename) {
        return filename
          .replace(/^.*pages(\\+|\/+)(.*)\.twig$/, '$2')
          .replace(/\\/g, '/');
      }
    })
  ]
};
