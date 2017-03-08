var El = require('./element.js');
var Collection = require('./collection.js');

function Yquery(selector) {
  var el = document.querySelector(selector);

  if (!el) {
    throw 'Element not found: ' + selector;
  }

  return new El(el);
}

Yquery.all = function (selector) {
  var els = document.querySelectorAll(selector);

  if (!els) {
    throw 'No element found: .' + className;
  }

  return makeCollection(els);

};

function makeCollection(els) {
  var collection = [];

  for (var i = 0, len = els.length; i < len; i++) {
    collection.push(new El(els[i]));
  }

  return new Collection(collection);
}

module.exports = Yquery;
