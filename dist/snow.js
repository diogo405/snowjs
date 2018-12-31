"use strict";

/**
 * Snow JS
 * Javascript lib to make snow :)
 * https://github.com/diogo405/snowjs
 * 
 * Author: Diogo Goncalves
 */
class Snow {
  constructor(options) {
    this.container = 'body';
    this.distance = `${document.body.clientWidth - 100}px`;
    this.default = {
      quantity: 5,
      minSize: 2,
      maxSize: 4,
      color: 'white',
      speed: '4s'
    };
    this.config = Object.assign(this.default, options);
  }

  fall() {
    var snowInterval = this._getRandomIntInclusive(300, 500);

    setInterval(() => {
      this._createSnowFlakes();
    }, snowInterval);
  }

  _createSnowFlakes() {
    var _this = this;

    var _loop = function _loop(i) {
      var snowflake = _this._createSnowFlake();

      document.querySelector(_this.container).appendChild(snowflake);

      var animationInterval = _this._getRandomIntInclusive(100, 500);

      setTimeout(() => {
        _this._animateSnowFlake(snowflake);
      }, animationInterval);
    };

    for (var i = 0; i < this.config.quantity; i++) {
      _loop(i);
    }
  }

  _animateSnowFlake(snowflake) {
    var leftDistance = `${this._getRandomIntInclusive(-50, -100)}px`;
    snowflake.style.transform = `translate(${leftDistance}, ${this.distance})`;
    snowflake.addEventListener("transitionend", function (event) {
      snowflake.remove();
    }, false);
  }

  _createSnowFlake() {
    var snowflake = document.createElement('span');

    var size = this._getRandomIntInclusive(this.config.minSize, this.config.maxSize);

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.borderRadius = '50%';
    snowflake.style.position = 'absolute';
    snowflake.style.top = `-${size}px`;
    snowflake.style.left = this._getLeftPosition();
    snowflake.style.backgroundColor = this.config.color;
    snowflake.style.display = 'block';
    snowflake.style.transition = `all ${this.config.speed} linear`;
    snowflake.className = 'snowflake';
    snowflake.style.zIndex = 99;
    snowflake.style.opacity = 0.9;
    return snowflake;
  }

  _getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive 
  }

  _getLeftPosition() {
    var adjusment = 50;
    return this._getRandomIntInclusive(0 + adjusment, document.body.clientWidth - 50) + 'px';
  }

}
