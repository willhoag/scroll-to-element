var scroll = require('scroll-to');

function calculateScrollOffset(elem, additionalOffset, alignment) {
  var elemRect = elem.getBoundingClientRect();
  var clientHeight = document.documentElement.clientHeight;

  additionalOffset = additionalOffset || 0;

  var scrollPosition;
  if (alignment === 'bottom') {
    scrollPosition = elemRect.bottom - clientHeight;
  } else if (alignment === 'middle') {
    scrollPosition = elemRect.bottom - clientHeight / 2 - elemRect.height / 2;
  } else { // top and default
    scrollPosition = elemRect.top;
  }

  return scrollPosition + additionalOffset + window.pageYOffset;
}

module.exports = function (elem, options) {
  options = options || {};
  if (typeof elem === 'string') elem = document.querySelector(elem);
  if (elem) return scroll(0, calculateScrollOffset(elem, options.offset, options.align), options);
};
