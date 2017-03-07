var $ = require('yquery');
var counter = 0;

window.$ = $;

var demo = $('#demo');
demo.content('DEMO');

var demos = $.byClass('demo');
demos.loop(function (item, i) {
  item.content('Item ' + i);
});

demos.item(0).content('Foo');

demos.on('click', function (e, el) {
  el.content('clicked ' + counter + ' times');
  counter++;
});
