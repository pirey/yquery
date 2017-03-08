var $ = require('../../src/yquery');
var counter = 0;

window.$ = $;

// get single element
var single = $('#single');
single.html('single');

var collection = $.all('.item');
collection.loop(function (item, i) {
  item.html('Item ' + i);
});

// get collection member, and set the content for that single element
collection.item(0).html('This is item 0');

// event listener
// you can also do this to single element
// single.on('click', function () { ... })
collection.on('click', function (e, el) {
  el.html('clicked ' + counter + ' times');
  counter++;
});
