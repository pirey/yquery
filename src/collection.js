function YqueryCollection(els) {
  this.els = els;
}

YqueryCollection.prototype.loop = function (callback) {
  for (var i = 0, len = this.els.length; i < len; i++) {
    callback(this.els[i], i);
  }
};

YqueryCollection.prototype.item = function (i) {
  return this.els[i];
};

YqueryCollection.prototype.on = function (eventName, callback) {
  this.loop(function (el) {
    el.on(eventName, callback);
  });
};

module.exports = YqueryCollection;
