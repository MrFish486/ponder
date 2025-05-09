#!/usr/bin/nodejs
class shader {
	constructor (reflection_spread) {
		this.reflection_spread = reflection_spread;
	}
	sample (vel) {
		return [vel[0] + Math.random() * this.reflection_spread * -1, vel[1] + Math.random() * this.reflection_spread * -1, vel[2] + Math.random() * this.reflection_spread * -1];
	}
}

module.exports = {shader};
