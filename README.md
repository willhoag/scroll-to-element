scroll-to-element
=====

Smooth scrolls to element of the specified selector or element reference with optional offset, easing, and duration via [scroll-to](https://www.npmjs.com/package/scroll-to)

[![NPM](https://nodei.co/npm/scroll-to-element.png)](https://nodei.co/npm/scroll-to-element/)

EXAMPLE
====

`scrollToElement(selector, <options>)`
---

```js
var scrollToElement = require('scroll-to-element');

scrollToElement('#id');

// with options
scrollToElement('.className', {
	offset: 0,
	ease: 'out-bounce',
	duration: 1500
});

// or if you already have a reference to the element
var elem = document.querySelector('.className');
scrollToElement(elem, {
	offset: 0,
	ease: 'out-bounce',
	duration: 1500
});
```

LICENSE
=======

MIT
