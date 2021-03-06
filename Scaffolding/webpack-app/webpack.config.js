const path = require('path');
const createDefaultConfig = require('@open-wc/building-webpack/modern-config');

// if you need to support IE11 use "modern-and-legacy-config" instead.
// const createDefaultConfig = require('@open-wc/building-webpack/modern-and-legacy-config');

module.exports = createDefaultConfig({
  input: path.resolve(__dirname, './index.html'),
});