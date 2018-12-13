class Snow {
	
	constructor(options) {

		this.container = 'body';
		this.distance = `${document.body.clientWidth - 100}px`;

		this.default = {
			quantity: 5,
			minSize: 2,
			maxSize: 4,
			color: 'white',
			speed: '4s',
		};
		this.config = Object.assign(this.default, options);
	}

	fall() {
		let snowInterval = this._getRandomIntInclusive(300, 500);
		setInterval(() => {
			this._createSnowFlakes();
		}, snowInterval);
	}

	_createSnowFlakes() {
		for (let i = 0; i < this.config.quantity; i++) {
			let snowflake = this._createSnowFlake();
			document.querySelector(this.container).appendChild(snowflake);
			let animationInterval = this._getRandomIntInclusive(100, 500);
			setTimeout(() => { this._animateSnowFlake(snowflake) }, animationInterval);
		}
	}

	_animateSnowFlake(snowflake) {
		let leftDistance = `${this._getRandomIntInclusive(-50, -100)}px`;
		snowflake.style.transform = `translate(${leftDistance}, ${this.distance})`;
		snowflake.addEventListener("transitionend", function(event) {
			snowflake.remove();
		}, false);
	}

	_createSnowFlake() {
		let snowflake = document.createElement('span');
		let size = this._getRandomIntInclusive(this.config.minSize, this.config.maxSize);
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
		let adjusment = 50;
		return this._getRandomIntInclusive(0 + adjusment, document.body.clientWidth - 50) + 'px';
	}
}