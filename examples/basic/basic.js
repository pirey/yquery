var $ = require('../../src/yquery');
var counter = 0;

window.$ = $;

// get single element
var single = $('#single');
single.html('single');

var collection = $.byClass('single');
// or
// var collection = $('.single', true);
collection.loop(function (item, i) {
  item.html('Item ' + i);
});

// get single yquery element
collection.item(0).html('Foo');

// event listener
// you can also do this to single element
// single.on('click', function () { ... })
collection.on('click', function (e, el) {
  el.html('clicked ' + counter + ' times');
  counter++;
});
