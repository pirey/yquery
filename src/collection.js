function YqueryCollection(els) {
  this.els = els;
}

/**
 * Loop through collection
 */
YqueryCollection.prototype.loop = function (callback) {
  for (var i = 0, len = this.els.length; i < len; i++) {
    callback(this.els[i], i);
  }
};

/**
 * Get nth item
 */
YqueryCollection.prototype.item = function (i) {
  return this.els[i];
};

/**
 * Event listener on all members
 */
YqueryCollection.prototype.on = function (eventName, callback) {
  this.loop(function (el) {
    el.on(eventName, callback);
  });
};

module.exports = YqueryCollection;
