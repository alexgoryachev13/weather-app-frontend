const path = require('path');
const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');
const defaultGetLocalIdent = require('css-loader/lib/getLocalIdent');

const css = [withCss, {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
    getLocalIdent: (loaderContext, localIdentName, localName, options) => {
      const fileName = path.basename(loaderContext.resourcePath);

      if (fileName.endsWith('global.css') || loaderContext.resourcePath.includes('node_modules')) {
        return localName;
      }

      return defaultGetLocalIdent(loaderContext, localIdentName, localName, options);
    },
  },
}];

const fonts = [withFonts, {
  enableSvg: true,
}];

module.exports = [css, fonts];
