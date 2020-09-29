// TODO:weight
// function random(min, max) {
//   var factor = Math.floor(Math.random() * (max - min) + min);
//   return factor;
// }

// TODO:intend to use Dep handle `transitionend` state notify
// function Dep() {
//   this._effects = [];
// }

// Dep.prototype.depend = function () {
//   this._effects.add(effect);
// };

// Dep.prototype.depend = function () {
//   this._effects.forEach(function (effect) {
//     effect();
//   });
// };

let timer;
let count = 0;
let duration = 2; //unit: sec
(function ($) {
  $.fn.extend({
    rotate: function (options) {
      var _this = this;
      var fn = function () {
        count++;
        _this.css({
          transform: "rotate(" + count + "turn)",
          transition:
            count > 1
              ? "all " + duration + "s linear"
              : "all " + duration + "s ease-in",
        });
      };
      this.on("transitionend", function (evt) {
        // TODO:have to enhance, notify stopRoatate when 1 turn was done
        _this.css({ transform: "none", transition: "none" });
        timer = setTimeout(fn);
      });
      fn();
      return _this;
    },
    stopRotate: function (intentDeg, callback) {
      var _this = this;
      // remove all of timers and transitionend event
      clearTimeout(timer);
      _this.off("transitionend");
      // rotated by offering degs
      _this.css({
        transform: "rotate(" + intentDeg + "deg)",
        transition: "all " + duration + "s ease-out",
      });
      _this.on("transitionend", function (evt) {
        _this.off("transitionend");
        callback && callback();
      });
      return this;
    },
  });
})(jQuery);
