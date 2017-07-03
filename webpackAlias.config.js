const path = require('path');

module.exports = {
  'test': path.resolve(__dirname, 'test'),
  'utils': path.resolve(__dirname, 'src/utils'),
  'validation': path.resolve(__dirname, 'src/utils/validation'),
  'components': path.resolve(__dirname, 'src/components'),
  'experiment': path.resolve(__dirname, 'src/experiment'),
  'genetic-operators': path.resolve(__dirname, 'src/experiment/genetic-operators'),
  'public': path.resolve(__dirname, 'src/public')
};