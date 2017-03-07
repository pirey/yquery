function YqueryElement (el) {
  this.el = el;
}

YqueryElement.prototype.content = function (content) {
  if (!content) {
    return this.el.innerHTML;
  }

  this.el.innerHTML = content;
};

YqueryElement.prototype.on = function (eventName, callback) {
  var el = this.el;
  var _this = this;
  el.addEventListener(eventName, function (e) {
    callback(e, _this);
  });
};

module.exports = YqueryElement;
