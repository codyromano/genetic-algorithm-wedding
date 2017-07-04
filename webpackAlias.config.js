const path = require('path');

module.exports = {
  'test': path.resolve(__dirname, 'test'),
  'stores': path.resolve(__dirname, 'src/stores'),
  'utils': path.resolve(__dirname, 'src/utils'),
  'pages': path.resolve(__dirname, 'src/components/mutable'),
  'validation': path.resolve(__dirname, 'src/utils/validation'),
  'components': path.resolve(__dirname, 'src/components'),
  'experiment': path.resolve(__dirname, 'src/experiment'),
  'images': path.resolve(__dirname, 'src/public/images'),
  'genetic-operators': path.resolve(__dirname, 'src/experiment/genetic-operators'),
  'public': path.resolve(__dirname, 'src/public')
};