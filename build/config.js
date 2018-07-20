const Path = require('path');

const Version = require('../package.json').version;
const ExampleDir = Path.resolve(__dirname,'../examples');
const SourceDir = Path.resolve(__dirname,'../src');
const DistDir = Path.join(__dirname,'../dist');
const RootDir = Path.join(__dirname,'../');

module.exports = {
  Appname: 'Wayo',
  Version,
  ExampleDir,
  SourceDir,
  DistDir,
  RootDir
};