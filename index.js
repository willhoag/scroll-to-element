var scroll = require('scroll-to');

module.exports = function (elem, options) {
  options = options || {};
  if (typeof elem === 'string') elem = document.querySelector(elem);
  if (elem) scroll(0, elem.offsetTop + (options.offset || 0), options);
};
