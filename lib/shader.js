#!/usr/bin/nodejs
class shader {
	constructor (reflection_spread) {
		this.reflection_spread = reflection_spread;
	}
	sample (vel) {
		return [-1 * vel[0] + Math.random() * this.reflection_spread, -1 * vel[1] + Math.random() * this.reflection_spread, -1 * vel[2] + Math.random() * this.reflection_spread];
	}
}

module.exports = {shader};
