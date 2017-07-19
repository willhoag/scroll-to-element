var scroll = require('scroll-to');

function calculateScrollOffset(elemRect, additionalOffset, alignment) {
  var body = document.body,
      html = document.documentElement;

  var clientHeight = html.clientHeight;
  var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                                 html.clientHeight, html.scrollHeight, html.offsetHeight );

  additionalOffset = additionalOffset || 0;

  var scrollPosition;
  if (alignment === 'bottom') {
    scrollPosition = elemRect.bottom - clientHeight;
  } else if (alignment === 'middle') {
    scrollPosition = elemRect.bottom - clientHeight / 2 - elemRect.height / 2;
  } else { // top and default
    scrollPosition = elemRect.top;
  }

  var maxScrollPosition = documentHeight - clientHeight;
  return Math.min(scrollPosition + additionalOffset + window.pageYOffset,
                  maxScrollPosition);
}

function isVisible(elemRect) {
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(elemRect.bottom < 0 || elemRect.top - viewHeight >= 0);
}

module.exports = function (elem, options) {
  options = options || {};
  if (typeof elem === 'string') elem = document.querySelector(elem);
	if (elem) {
		var elemRect = elem.getBoundingClientRect();
		if (options.onlyIfNeeded && !isVisible(elemRect)) {
		 return scroll(0, calculateScrollOffset(elemRect, options.offset, options.align), options);
		}
	}
};
