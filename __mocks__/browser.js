const {JSDOM} = require("jsdom");

const DOM = new JSDOM('<html><head><style></style></head><body></body></html>');
global.window = DOM.window

global.document = DOM.window.document;

global.navigator = {
  userAgent: 'node.js'
};
global.document.body.__proto__.getBoundingClientRect = jest.fn().mockReturnValue({
  x: 0,
  y: 0,
  width: 100,
  height: 100
});