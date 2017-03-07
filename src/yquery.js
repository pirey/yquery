var El = require('./element.js');
var Collection = require('./collection.js');

function Yquery(selector, all) {
  if (all) {
    var els = document.querySelectorAll(selector);
    return makeCollection(els);
  } else {
    var el = document.querySelector(selector);
    if (!el) {
      throw 'No element found: ' + selector;
    }

    return new El(el);
  }
}

Yquery.byId = function (id) {
  var el = document.getElementById(id);
  if (!el) {
    throw 'Element not found: #' + id;
  }

  return new El(el);
}

Yquery.byClass = function (className) {
  var els = document.getElementsByClassName(className);
  return makeCollection(els);

};


function makeCollection(els) {
  var collection = [];

  if (!els) {
    throw 'No element found: .' + className;
  }

  for (var i = 0, len = els.length; i < len; i++) {
    collection.push(new El(els[i]));
  }

  return new Collection(collection);
}

module.exports = Yquery;
